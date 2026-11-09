<template>
  <article class="p-2.5 rounded-qt bg-white border transition flex flex-col gap-2 cursor-pointer"
    :class="file.status === 'PARSE ERROR'
      ? 'bg-qt-red-bg border-qt-red-bd hover:border-qt-red'
      : file.selected
        ? 'border-qt-blue ring-1 ring-qt-blue/20'
        : 'border-qt-bd hover:border-qt-blue'">
    <div class="flex items-start justify-between gap-2">
      <div class="flex items-center gap-2 min-w-0">
        <span class="text-[18px] shrink-0 w-5 text-center" aria-hidden="true">
          <template v-if="file.status === 'PARSE ERROR'">⚠</template>
          <template v-else-if="file.status === 'STREAMING'">↻</template>
          <template v-else-if="file.status === 'DRAFT'">◌</template>
          <template v-else>✓</template>
        </span>
        <div class="flex flex-col min-w-0">
          <span class="text-[13px] font-semibold text-qt-fg truncate">{{ file.name }}</span>
          <div class="flex items-center gap-1.5 text-[10px] text-qt-mutfg">
            <span class="font-mono bg-qt-mut px-1 py-0.5 rounded-[4px]">{{ file.id }}</span>
            <span aria-hidden="true">•</span>
            <span>{{ file.size }}</span>
          </div>
        </div>
      </div>
      <span
        class="px-2 py-0.5 rounded-[4px] text-[10px] font-bold tracking-wide shrink-0"
        :class="pillClass"
      >{{ file.status }}</span>
    </div>

    <div class="w-full bg-qt-mut rounded-full h-1.5 overflow-hidden">
      <div class="h-1.5 rounded-full" :class="barClass" :style="{ width: file.progress + '%' }"></div>
    </div>
    <p v-if="file.hint" class="text-[10px] text-qt-blue font-mono truncate m-0">{{ file.hint }}</p>
    <p v-if="file.error" class="p-1.5 bg-white rounded-[6px] border border-qt-red-bd text-[11px] text-qt-red-fg font-mono leading-tight m-0">
      {{ file.error }}
    </p>
    <div class="flex items-center justify-between text-[10px] font-mono" :class="file.status === 'PARSE ERROR' ? 'text-qt-red-fg' : 'text-qt-mutfg'">
      <span>{{ file.meta.split(' · ')[0] }}</span>
      <span>{{ file.meta.split(' · ')[1] }}</span>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { IntakeFile } from '~/components/dashboard/types/IntakeFile'

const props = defineProps<{ file: IntakeFile }>()

const pillClass = computed(() => ({
  ANALYZED: 'bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46]',
  STREAMING: 'bg-[#EFF6FF] border border-[#BFDBFE] text-qt-blue',
  DRAFT: 'bg-qt-mut border border-qt-bd text-qt-mutfg',
  'PARSE ERROR': 'bg-qt-red-bg border border-qt-red-bd text-qt-red',
}[props.file.status]))

const barClass = computed(() => ({
  ANALYZED: 'bg-qt-green',
  STREAMING: 'bg-qt-blue',
  DRAFT: 'bg-qt-bd',
  'PARSE ERROR': 'bg-qt-red',
}[props.file.status]))
</script>
