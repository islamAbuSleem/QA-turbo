<template>
  <div>
    <h1 class="text-4xl md:text-5xl font-semibold leading-[1.08] tracking-tight m-0 mb-4 max-w-[20ch]">
      Turn BRDs into structured, testable quality.
    </h1>
    <p class="text-lg text-qt-mutfg m-0 mb-6 max-w-[62ch] leading-relaxed">
      <b class="text-qt-fg">QA-Turbo</b> is an assembly-line QA platform we’re building from the ground up.
      Each station does one job — from requirement analysis to verified fixes — so quality stays traceable,
      not guesswork.
    </p>
    <div class="flex flex-wrap gap-3 mb-6">
      <NuxtLink
        to="/onboarding"
        class="inline-flex items-center justify-center min-h-[44px] px-5 rounded-qt-sm font-semibold bg-qt-blue text-white no-underline hover:bg-qt-blue-hover hover:no-underline"
      >
        Create project &amp; admin
      </NuxtLink>
      <NuxtLink
        to="/login"
        class="inline-flex items-center justify-center min-h-[44px] px-5 rounded-qt-sm font-semibold bg-white text-qt-fg border border-qt-bd no-underline hover:bg-qt-bg hover:no-underline"
      >
        Sign in
      </NuxtLink>
      <NuxtLink
        to="/dashboard"
        class="inline-flex items-center justify-center min-h-[44px] px-4 rounded-qt-sm font-semibold text-qt-mutfg no-underline hover:text-qt-fg hover:no-underline"
      >
        Open app →
      </NuxtLink>
    </div>
    <dl class="grid grid-cols-2 sm:grid-cols-3 gap-3 m-0">
      <div v-for="item in highlights" :key="item.k" class="bg-qt-bg border border-qt-bd rounded-qt-sm p-3 transition hover:shadow-lg">
        <dt class="text-[11px] uppercase tracking-wide text-qt-mutfg m-0">{{ item.k }}</dt>
        <dd class="text-sm font-semibold text-qt-fg m-0 mt-1">{{ item.v }}</dd>
      </div>
    </dl>
    <p class="text-xs text-qt-mutfg m-0 mt-3">Phase 1 target: deterministic extraction from BRD to reviewed contract.</p>
  </div>
</template>

<script setup lang="ts">
const highlights = [
  { k: 'Phase 1', v: 'BRD → analysis' },
  { k: 'Pipeline', v: '6 stations' },
  { k: 'Principle', v: 'Traceable output' },
]
</script>
