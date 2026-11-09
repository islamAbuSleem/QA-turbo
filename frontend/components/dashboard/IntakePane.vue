<template>
  <div class="w-full lg:w-[340px] shrink-0 bg-white border-r border-qt-bd flex flex-col p-3 gap-3">
    <div class="flex flex-col gap-2">
      <div class="flex items-center justify-between">
        <span class="text-[11px] text-qt-fg font-bold uppercase tracking-wider">Document Intake</span>
        <span class="text-[11px] text-qt-mutfg font-mono">AST PARSER v4.1</span>
      </div>
      <div class="border-2 border-dashed border-qt-blue bg-qt-mut rounded-qt p-3 flex flex-col items-center justify-center text-center gap-1">
        <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-qt-blue text-[20px]" aria-hidden="true">↑</div>
        <span class="text-[13px] text-qt-fg font-semibold">Drag &amp; drop BRD document</span>
        <span class="text-[11px] text-qt-mutfg">.md, .txt up to 10 MB</span>
        <button class="mt-2 min-h-[44px] px-3 w-full bg-white border border-qt-bd hover:border-qt-blue text-qt-blue rounded-qt-sm text-sm font-semibold transition-all cursor-pointer" type="button">
          Browse local files
        </button>
      </div>
    </div>

    <div class="flex flex-col gap-2 pt-2 border-t border-qt-bd">
      <div class="flex items-center justify-between">
        <span class="text-[11px] text-qt-fg font-bold uppercase tracking-wider">Ingested Documents ({{ files.length }})</span>
        <span class="text-[11px] text-qt-green font-mono font-semibold">1 ACTIVE</span>
      </div>
      <div class="grid grid-cols-4 gap-1 p-0.5 bg-qt-mut rounded-qt-sm border border-qt-bd text-center text-[10px]">
        <button v-for="f in filters" :key="f.k"
          class="py-1 px-1 rounded-[6px] transition-all cursor-pointer"
          :class="activeFilter === f.k ? 'bg-white text-qt-fg font-bold shadow-sm' : 'text-qt-mutfg hover:text-qt-fg'"
          type="button" @click="activeFilter = f.k">{{ f.label }}</button>
      </div>
    </div>

    <div class="flex flex-col gap-2 overflow-y-auto">
      <FileCard v-for="file in visibleFiles" :key="file.id" :file="file" />
      <p v-if="visibleFiles.length === 0" class="text-xs text-qt-mutfg text-center py-4 m-0">
        Drop a BRD above — no files match this filter.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import FileCard from '~/components/dashboard/FileCard.vue'
import type { IntakeFile } from '~/components/dashboard/types/IntakeFile'

const files: IntakeFile[] = [
  { id: 'brd_1E8A', name: 'checkout_v2.4_final_spec.md', size: '428 KB', status: 'ANALYZED', progress: 100, meta: '24 REQS PARSED · 2026-11-08 14:22 UTC', selected: true },
  { id: 'brd_9F2B', name: 'payment_gateway_fallback_v1.md', size: '1.2 MB', status: 'STREAMING', progress: 64, hint: 'Parsing section 4.2: 3D-Secure timeout…', meta: '64% TOKEN STREAM · Just now' },
  { id: 'brd_3A04', name: 'tax_engine_integration_draft.txt', size: '84 KB', status: 'DRAFT', progress: 0, meta: 'UNINDEXED · 2h ago' },
  { id: 'brd_ERROR_09', name: 'legacy_auth_migration_raw.pdf', size: '8.4 MB', status: 'PARSE ERROR', progress: 0, error: 'Invalid AST syntax in Section 2.1 table schemas', meta: 'AST HALTED · 10 min ago' },
]

const filters = [
  { k: 'all', label: 'All (4)' },
  { k: 'ready', label: 'Ready' },
  { k: 'parsing', label: 'Parsing' },
  { k: 'errors', label: 'Errors' },
] as const

const activeFilter = ref<string>('all')
const visibleFiles = computed(() =>
  activeFilter.value === 'all'
    ? files
    : files.filter(f => ({
        ready: f.status === 'ANALYZED',
        parsing: f.status === 'STREAMING',
        errors: f.status === 'PARSE ERROR',
      }[activeFilter.value])),
)
</script>
