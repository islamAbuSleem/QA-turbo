<template>
  <div class="bg-white border border-qt-bd rounded-qt overflow-x-auto">
    <table class="w-full text-left border-collapse min-w-[640px]">
      <thead>
        <tr class="border-b border-qt-bd">
          <th v-if="selectable" class="p-2 w-8">
            <input
              type="checkbox"
              class="w-auto min-h-0"
              :checked="allSelected"
              aria-label="Select all rows"
              @change="toggleAll"
            >
          </th>
          <th
            v-for="col in columns"
            :key="col.key"
            class="p-2 text-[10px] uppercase tracking-wider text-qt-mutfg font-semibold"
            :class="[
              alignClass(col),
              col.sortable ? 'cursor-pointer select-none hover:text-qt-fg' : '',
            ]"
            :style="col.width ? { width: col.width } : undefined"
            :aria-sort="ariaSort(col.key)"
            @click="col.sortable ? toggleSort(col.key) : undefined"
          >
            <slot :name="`header-${col.key}`" :column="col">
              {{ col.label }}
              <span v-if="isSorted(col.key)" class="text-qt-blue" aria-hidden="true">{{ sortDesc ? '↓' : '↑' }}</span>
            </slot>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="loading">
          <td v-for="n in skeletonColumns" :key="n" class="p-3">
            <div class="h-3 rounded bg-qt-mut animate-pulse" />
          </td>
        </tr>
        <tr v-else-if="sortedItems.length === 0">
          <td :colspan="columns.length + (selectable ? 1 : 0)" class="p-6 text-center text-sm text-qt-mutfg">
            {{ emptyText }}
          </td>
        </tr>
        <template v-else>
          <tr
            v-for="(item, index) in sortedItems"
            :key="keyOf(item, index)"
            class="border-b border-qt-bd last:border-b-0 hover:bg-qt-mut/50 transition-colors"
            :class="isActive(item) ? 'bg-qt-mut/70 ring-1 ring-inset ring-qt-blue/30' : ''"
            tabindex="0"
            @click="emit('row-click', item, index, $event)"
            @keydown.enter.prevent="emit('row-activate', item, index)"
          >
            <td v-if="selectable" class="p-2 align-top" @click.stop>
              <input
                type="checkbox"
                class="w-auto min-h-0"
                :checked="isSelected(item)"
                :aria-label="`Select row ${keyOf(item, index)}`"
                @change="toggleRow(item)"
              >
            </td>
            <td
              v-for="col in columns"
              :key="col.key"
              class="p-2 align-top"
              :class="alignClass(col)"
            >
              <slot :name="`cell-${col.key}`" :item="item" :value="item[col.key]" :column="col" :index="index">
                {{ formatValue(item[col.key]) }}
              </slot>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts" generic="T extends Record<string, unknown>">
/**
 * QtDataTable — shared, reusable data table.
 *
 * Props (column shape mirrored inline; see components/types/DataTableColumn.ts):
 *   columns, items, rowKey, selectable, loading, emptyText, dense
 * Models (v-model):
 *   sortBy, sortDesc, selectedKeys
 * Events:
 *   row-click (item, index, event) · row-activate (item, index) · sort-change ({ key, desc })
 * Slots:
 *   cell-<key> (item, value, column, index) · header-<key> (column)
 */
const props = withDefaults(defineProps<{
  columns: {
    key: string
    label: string
    align?: 'left' | 'center' | 'right'
    sortable?: boolean
    width?: string
  }[]
  items: T[]
  rowKey?: string
  activeRowKey?: string | null
  selectable?: boolean
  loading?: boolean
  emptyText?: string
  dense?: boolean
}>(), {
  rowKey: 'id',
  activeRowKey: null,
  selectable: false,
  loading: false,
  emptyText: 'No records found.',
  dense: false,
})

const emit = defineEmits<{
  (event: 'row-click', item: T, index: number, native: Event): void
  (event: 'row-activate', item: T, index: number): void
  (event: 'sort-change', payload: { key: string; desc: boolean }): void
}>()

const sortBy = defineModel<string | null>('sortBy', { default: null })
const sortDesc = defineModel<boolean>('sortDesc', { default: false })
const selectedKeys = defineModel<string[]>('selectedKeys', { default: () => [] })

const skeletonColumns = computed(() => props.columns.map(c => c.key))

const keyOf = (item: T, index: number): string => {
  const raw = item[props.rowKey]
  return typeof raw === 'string' || typeof raw === 'number' ? String(raw) : String(index)
}

const isSelected = (item: T): boolean => selectedKeys.value.includes(keyOf(item, -1))

const isActive = (item: T): boolean => props.activeRowKey !== null && keyOf(item, -1) === props.activeRowKey

const allSelected = computed(() =>
  props.items.length > 0 && props.items.every(item => selectedKeys.value.includes(keyOf(item, -1))),
)

function toggleRow(item: T): void {
  const key = keyOf(item, -1)
  selectedKeys.value = selectedKeys.value.includes(key)
    ? selectedKeys.value.filter(k => k !== key)
    : [...selectedKeys.value, key]
}

function toggleAll(): void {
  selectedKeys.value = allSelected.value ? [] : props.items.map((item, index) => keyOf(item, index))
}

const isSorted = (key: string): boolean => sortBy.value === key

function toggleSort(key: string): void {
  const desc = sortBy.value === key ? !sortDesc.value : false
  sortBy.value = key
  sortDesc.value = desc
  emit('sort-change', { key, desc })
}

const ariaSort = (key: string): 'ascending' | 'descending' | 'none' => {
  if (!isSorted(key)) return 'none'
  return sortDesc.value ? 'descending' : 'ascending'
}

const sortedItems = computed<T[]>(() => {
  const key = sortBy.value
  if (!key) return props.items
  const column = props.columns.find(c => c.key === key)
  if (!column?.sortable) return props.items
  const direction = sortDesc.value ? -1 : 1
  return [...props.items].sort((a, b) => {
    const left = a[key]
    const right = b[key]
    if (typeof left === 'number' && typeof right === 'number') return (left - right) * direction
    return String(left ?? '').localeCompare(String(right ?? '')) * direction
  })
})

const alignClass = (column: { align?: 'left' | 'center' | 'right' }): string => {
  if (column.align === 'right') return 'text-right'
  if (column.align === 'center') return 'text-center'
  return 'text-left'
}

const formatValue = (value: unknown): string => {
  if (value === null || value === undefined) return ''
  if (typeof value === 'object') return JSON.stringify(value)
  return String(value)
}
</script>
