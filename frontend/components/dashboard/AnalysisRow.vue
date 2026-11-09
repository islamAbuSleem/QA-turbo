<template>
  <tr class="border-b border-qt-bd align-top">
    <td class="py-2 pr-3"><code class="font-mono text-xs bg-qt-mut px-1.5 py-0.5 rounded">{{ entry.id }}</code></td>
    <td class="py-2 pr-3 text-xs text-qt-mutfg">{{ entry.type }}</td>
    <td class="py-2 pr-3">
      <span class="text-xs font-semibold text-qt-fg">{{ entry.logic }}</span>
      <span class="block text-xs text-qt-mutfg mt-0.5">{{ entry.detail }}</span>
    </td>
    <td class="py-2 pr-3 text-xs text-qt-mutfg">{{ entry.actor }}</td>
    <td class="py-2">
      <span class="px-1.5 py-0.5 rounded-[4px] text-[10px] font-bold tracking-wide"
        :class="pillClass">{{ entry.priority }}</span>
    </td>
  </tr>
</template>

<script setup lang="ts">
import type { AnalysisEntry } from '~/components/dashboard/types/AnalysisEntry'

const props = defineProps<{ entry: AnalysisEntry }>()

const pillClass = computed(() => ({
  P0: 'bg-qt-red-bg border border-qt-red-bd text-qt-red-fg',
  P1: 'bg-[#FFFBEB] border border-[#FDE68A] text-[#92400E]',
  P2: 'bg-qt-mut border border-qt-bd text-qt-mutfg',
}[props.entry.priorityLevel]))
</script>
