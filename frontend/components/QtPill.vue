<template>
  <span
    class="inline-flex items-center gap-1 px-2 py-0.5 rounded-[4px] text-[10px] font-bold tracking-wide whitespace-nowrap border"
    :class="toneClass"
  >
    <slot>{{ props.label }}</slot>
  </span>
</template>

<script setup lang="ts">
/**
 * QtPill — shared status pill.
 * Tones: success · info · warning · error · muted · neutral
 */
const props = withDefaults(defineProps<{
  label?: string
  tone?: 'success' | 'info' | 'warning' | 'error' | 'muted' | 'neutral'
}>(), {
  label: '',
  tone: 'muted',
})

const toneClass = computed(() => ({
  success: 'bg-[#ECFDF5] border-[#A7F3D0] text-[#065F46]',
  info: 'bg-[#EFF6FF] border-[#BFDBFE] text-qt-blue',
  warning: 'bg-[#FFFBEB] border-[#FDE68A] text-[#92400E]',
  error: 'bg-qt-red-bg border-qt-red-bd text-qt-red',
  muted: 'bg-qt-mut border-qt-bd text-qt-mutfg',
  neutral: 'bg-white border-qt-bd text-qt-fg',
}[props.tone]))
</script>
