<template>
  <section id="about" class="max-w-[1100px] mx-auto px-5 py-12 md:py-14 scroll-mt-20">
    <div class="grid gap-6 md:grid-cols-[.9fr_1.1fr]">
      <LandingAboutCard
        v-for="card in cards"
        :key="card.eyebrow"
        :eyebrow="card.eyebrow"
        :title="card.title"
        :text="card.text"
        :text-before="card.textBefore"
        :chain="card.chain"
        :text-after="card.textAfter"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { AboutCardData } from '~/components/landing/types/AboutCardData'

const cards: AboutCardData[] = [
  {
    eyebrow: 'WHO WE ARE',
    title: 'QA testing platform, built by doing',
    text: 'QA-Turbo is a QA testing platform that turns requirements into verified quality. I’m building and testing it myself — every station is a real system I design, code, and verify, so I learn by doing.',
  },
  {
    eyebrow: 'WHAT WE’RE DOING',
    title: 'Building a traceable 6-station pipeline',
    textBefore: 'Requirements become quality artifacts through one chain:',
    chain: 'BRD → spec → tests → audit → run → bugs → verify',
    textAfter: '. Phase 1 starts at the source: structured actors, requirements, rules, edge cases, and open questions — so every later step links back to evidence, not black-box guesses.',
  },
]
</script>
