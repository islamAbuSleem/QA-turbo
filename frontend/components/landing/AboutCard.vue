<template>
  <article class="bg-white border border-qt-bd rounded-qt p-6 transition hover:shadow-lg">
    <p class="font-mono text-[11px] font-semibold text-qt-blue m-0 mb-2">{{ eyebrow }}</p>
    <h2 class="text-2xl font-semibold m-0 mb-3 tracking-tight">{{ title }}</h2>
    <p class="text-qt-mutfg m-0 leading-relaxed">
      <template v-if="chain">{{ textBefore }} <span class="font-mono text-[0.92em] text-qt-fg bg-qt-mut border border-qt-bd rounded px-1 py-0.5">{{ chain }}</span>{{ textAfter }}</template>
      <template v-else>{{ text }}</template>
    </p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  text?: string
  textBefore?: string
  chain?: string
  textAfter?: string
}>()
</script>
