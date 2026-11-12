<template>
  <QtDataTable
    :columns="columns"
    :items="users"
    row-key="id"
    :active-row-key="activeUserId"
    empty-text="No team members yet — add the first admin."
    @row-click="onRowClick"
    @row-activate="onRowClick"
  >
    <template #cell-name="{ item }">
      <div class="flex items-center gap-2">
        <span class="w-7 h-7 rounded-full bg-qt-mut text-qt-fg grid place-items-center text-xs font-semibold shrink-0" aria-hidden="true">{{ initials(item.name) }}</span>
        <span class="text-sm font-semibold text-qt-fg">{{ item.name }}</span>
      </div>
    </template>
    <template #cell-email="{ item }">
      <span class="font-mono text-xs text-qt-mutfg whitespace-nowrap">{{ item.email }}</span>
    </template>
    <template #cell-role="{ item }">
      <QtPill :label="item.role" :tone="roleTone[item.role]" />
    </template>
    <template #cell-status="{ item }">
      <QtPill :label="item.status === 'active' ? 'Active' : 'Invited'" :tone="item.status === 'active' ? 'success' : 'warning'" />
    </template>
    <template #cell-lastLogin="{ item }">
      <span class="font-mono text-xs text-qt-mutfg">{{ item.lastLogin }}</span>
    </template>
  </QtDataTable>
</template>

<script setup lang="ts">
import QtDataTable from '~/components/QtDataTable.vue'
import QtPill from '~/components/QtPill.vue'
import type { DataTableColumn } from '~/components/types/DataTableColumn'
import type { TeamUser } from '~/components/users/types/TeamUser'

const props = defineProps<{
  users: TeamUser[]
  activeUserId?: string | null
}>()

const emit = defineEmits<{
  (event: 'select', user: TeamUser): void
}>()

const columns: DataTableColumn[] = [
  { key: 'name', label: 'Name', width: '220px' },
  { key: 'email', label: 'Email', width: '220px' },
  { key: 'role', label: 'Role', width: '120px', sortable: true },
  { key: 'status', label: 'Status', width: '110px', sortable: true },
  { key: 'lastLogin', label: 'Last login', width: '160px', sortable: true },
]

const roleTone = {
  admin: 'info',
  analyst: 'success',
  tester: 'warning',
  viewer: 'muted',
} as const

const initials = (name: string): string =>
  name.split(' ').filter(Boolean).slice(0, 2).map(part => part[0]?.toUpperCase() ?? '').join('')

function onRowClick(user: TeamUser): void {
  emit('select', user)
}
</script>
