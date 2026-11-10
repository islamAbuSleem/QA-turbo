<template>
  <section id="how" class="border-y border-qt-bd bg-white scroll-mt-20">
    <div class="max-w-[1100px] mx-auto px-5 py-12 md:py-14">
      <h2 class="text-2xl font-semibold m-0 mb-2 tracking-tight">How it works</h2>
      <p class="text-qt-mutfg m-0 mb-6 max-w-[65ch]">Simple intake now, strict contracts later — built to scale into the full pipeline.</p>
      <ol class="grid gap-3 md:grid-cols-3 m-0 p-0 list-none">
        <li v-for="step in steps" :key="step.n" class="border border-qt-bd rounded-qt p-4 bg-qt-bg transition hover:shadow-lg">
          <span class="font-mono text-xs font-semibold text-white bg-qt-blue rounded px-1.5 py-0.5">{{ step.n }}</span>
          <h3 class="text-base font-semibold m-0 mt-2 mb-1">{{ step.title }}</h3>
          <p class="text-sm text-qt-mutfg m-0 leading-relaxed">{{ step.desc }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  { n: '01', title: 'Upload raw specification', desc: 'Bring in the BRD as the source of truth for the project.' },
  { n: '02', title: 'Generate & review contract', desc: 'Extract a structured spec — actors, rules, requirements, edge cases, gaps.' },
  { n: '03', title: 'Feed automated pipeline', desc: 'Use the contract to drive tests, audits, execution, bugs, and verification.' },
]
</script>
