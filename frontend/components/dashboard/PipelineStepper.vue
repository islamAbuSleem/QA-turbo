<template>
  <div class="w-full bg-white border-b border-qt-bd px-5 py-2 flex flex-col gap-1.5">
    <div class="flex items-center justify-between text-[11px] text-qt-mutfg">
      <div class="flex items-center gap-2">
        <span class="text-qt-fg font-semibold tracking-wider uppercase">Autonomous Verification Pipeline</span>
        <span class="bg-qt-mut text-qt-fg px-1.5 py-0.5 rounded-[4px] font-mono">SPEC_RUN: checkout_core_2.4</span>
      </div>
      <div class="flex items-center gap-3">
        <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-qt-blue animate-pulse" aria-hidden="true"></span>Active Pipeline</span>
        <span class="font-mono">STATION 1 OF 6</span>
      </div>
    </div>
    <div class="grid grid-cols-3 xl:grid-cols-6 gap-2 pt-1 pb-1">
      <div
        v-for="s in stations"
        :key="s.n"
        class="flex items-center gap-2 p-2 rounded-[8px] border transition-all"
        :class="s.active ? 'bg-qt-blue text-white border-qt-blue' : 'bg-white text-qt-mutfg border-qt-bd'"
      >
        <div
          class="w-5 h-5 rounded-[4px] flex items-center justify-center font-bold text-[10px] shrink-0"
          :class="s.active ? 'bg-white text-qt-blue' : 'bg-qt-mut text-qt-fg'"
        >{{ s.n }}</div>
        <div class="flex flex-col min-w-0">
          <span class="text-[11px] leading-tight font-bold truncate" :class="s.active ? 'text-white' : 'text-qt-fg'">{{ s.title }}</span>
          <span class="text-[9px] uppercase tracking-wider truncate" :class="s.active ? 'text-white/90' : 'text-qt-mutfg'">{{ s.status }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PipelineStation } from '~/components/dashboard/types/PipelineStation'

const stations: PipelineStation[] = [
  { n: '1', title: 'BA Agent (BRD)', status: 'Active Execution', active: true },
  { n: '2', title: 'Test Writer', status: 'Queued', active: false },
  { n: '3', title: 'Auditor', status: 'Pending AST', active: false },
  { n: '4', title: 'Runner', status: 'Standby', active: false },
  { n: '5', title: 'Bug Opener', status: 'Standby', active: false },
  { n: '6', title: 'Verifier', status: 'Telemetry Gate', active: false },
]
</script>
