<template>
  <div class="flex-1 flex flex-col min-w-0 bg-qt-bg">
    <div class="p-4 bg-white border-b border-qt-bd flex flex-col xl:flex-row xl:items-center justify-between gap-3">
      <div class="flex flex-col gap-1.5 min-w-0">
        <div class="flex flex-wrap items-center gap-2">
          <h1 class="text-xl font-bold text-qt-fg tracking-tight truncate m-0">checkout_v2.4_final_spec.md</h1>
          <code class="font-mono text-sm bg-qt-mut text-qt-fg px-2 py-0.5 rounded font-bold">brd_1E8A</code>
          <span class="font-mono text-sm text-qt-mutfg">428 KB</span>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] rounded-[4px] text-sm font-semibold">✓ 98.4% Confidence</span>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 bg-qt-mut border border-qt-bd text-qt-mutfg rounded-[4px] text-sm font-mono">Parsing Time: 1.2s</span>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 bg-qt-mut border border-qt-bd text-qt-mutfg rounded-[4px] text-sm font-mono">Station: BA Agent v4.1</span>
        </div>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <button class="min-h-[44px] px-4 bg-white border border-qt-bd hover:border-qt-blue hover:bg-qt-mut text-qt-fg text-sm font-semibold rounded-qt-sm flex items-center gap-2 transition-all cursor-pointer" type="button">
          Export JSON/Markdown
        </button>
        <button class="min-h-[44px] px-4 bg-qt-blue hover:bg-qt-blue-hover text-white text-sm font-bold rounded-qt-sm flex items-center gap-2 transition-all cursor-pointer" type="button">
          Send to Test Writer →
        </button>
      </div>
    </div>

    <div class="p-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
      <MetricCard v-for="m in metrics" :key="m.label" :metric="m" />
    </div>

    <div class="px-4 pb-4 flex flex-col gap-3">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="text-[11px] font-semibold text-qt-fg uppercase tracking-wider">Identified Actors</span>
          <span class="text-[11px] text-qt-mutfg">({{ actors.length }})</span>
        </div>
        <div class="flex flex-wrap gap-1.5">
          <span v-for="a in actors" :key="a" class="border border-qt-bd bg-white rounded-qt-sm px-2 py-1 text-xs text-qt-fg">{{ a }}</span>
        </div>
      </div>

      <div class="bg-white border border-qt-bd rounded-qt overflow-x-auto">
        <table class="w-full text-left border-collapse min-w-[760px]">
          <thead>
            <tr class="border-b border-qt-bd">
              <th class="p-2 text-[10px] uppercase tracking-wider text-qt-mutfg font-semibold">ID</th>
              <th class="p-2 text-[10px] uppercase tracking-wider text-qt-mutfg font-semibold">Type</th>
              <th class="p-2 text-[10px] uppercase tracking-wider text-qt-mutfg font-semibold">Logic &amp; Scope</th>
              <th class="p-2 text-[10px] uppercase tracking-wider text-qt-mutfg font-semibold">Actor</th>
              <th class="p-2 text-[10px] uppercase tracking-wider text-qt-mutfg font-semibold">Priority</th>
            </tr>
          </thead>
          <tbody>
            <AnalysisRow v-for="entry in entries" :key="entry.id" :entry="entry" />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MetricCard from '~/components/dashboard/MetricCard.vue'
import AnalysisRow from '~/components/dashboard/AnalysisRow.vue'
import type { PipelineMetric } from '~/components/dashboard/types/PipelineMetric'
import type { AnalysisEntry } from '~/components/dashboard/types/AnalysisEntry'

const metrics: (PipelineMetric & { icon: string })[] = [
  { label: 'Requirements', value: '24', note: '+100% Extracted', icon: '✓' },
  { label: 'Business Rules', value: '14', note: '9 Constraints', icon: '§' },
  { label: 'Edge Cases', value: '8', note: '5 Exceptions', icon: '!' },
  { label: 'Open Questions', value: '3', note: 'Needs PM Review', icon: '?' },
]

const actors = [
  'Guest User · Actor',
  'Registered Customer · Actor',
  'Payment Gateway · External API',
  'Inventory ERP · Internal Svc',
]

const entries: AnalysisEntry[] = [
  { id: 'REQ-001', type: 'REQ', logic: 'One-click checkout auth for saved payment methods.', detail: 'Use vault token without re-entering CVV if last verification < 24h.', actor: 'Registered Customer', priority: 'P0 Blocker', priorityLevel: 'P0' },
  { id: 'REQ-002', type: 'REQ', logic: 'Guest checkout must enforce SMS OTP verification.', detail: 'SMS handshake required before card authorization.', actor: 'Guest User', priority: 'P1 High', priorityLevel: 'P1' },
  { id: 'BR-001', type: 'RULE', logic: 'Cart inventory lock TTL is exactly 15 minutes.', detail: 'Decrement stock on checkout init; release on cart abort.', actor: 'Inventory ERP', priority: 'P0 Blocker', priorityLevel: 'P0' },
  { id: 'BR-002', type: 'RULE', logic: 'Split-tender disallowed with promotional voucher.', detail: 'Orders consuming coupons with VOUCH_STACKABLE=FALSE.', actor: 'Payment Gateway', priority: 'P2 Medium', priorityLevel: 'P2' },
]
</script>
