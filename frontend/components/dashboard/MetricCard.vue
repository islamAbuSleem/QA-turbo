<template>
  <div class="p-3 bg-white border border-qt-bd rounded-qt flex flex-col justify-between transition hover:shadow-lg">
    <div class="flex items-center justify-between">
      <span class="text-[11px] text-qt-mutfg uppercase tracking-wider font-semibold whitespace-nowrap">{{ metric.label }}</span>
      <span class="w-8 h-8 rounded-qt-sm bg-qt-mut flex items-center justify-center text-qt-blue text-[13px]" aria-hidden="true">{{ metric.icon }}</span>
    </div>
    <div class="my-1 flex items-baseline gap-2">
      <span class="text-2xl font-bold text-qt-fg leading-none">{{ metric.value }}</span>
      <span class="text-[11px] text-qt-green font-mono font-semibold">{{ metric.note }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PipelineMetric } from '~/components/dashboard/types/PipelineMetric'

defineProps<{ metric: PipelineMetric & { icon: string } }>()
</script>
