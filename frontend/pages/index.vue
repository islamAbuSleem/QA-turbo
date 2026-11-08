<template>
  <div>
    <section class="border-b border-qt-bd bg-white">
      <div class="max-w-[1100px] mx-auto px-5 pt-12 pb-12 md:pt-16 md:pb-16">
        <p class="font-mono text-[11px] text-qt-mutfg bg-qt-bg border border-qt-bd rounded-qt-sm px-3 py-1.5 m-0 mb-4 inline-block">
          BUILD_SPEC: QA-TURBO-L1 // PIPELINE_STATUS: ACTIVE_SLICE // SPEC_REV: 4.18.2
        </p>
        <div class="grid gap-10 md:grid-cols-[1.15fr_.85fr] items-start">
          <LandingHero />
          <PhaseOnePanel />
        </div>
      </div>
    </section>

    <AboutSection />
    <HowItWorks />
    <PipelineSection />
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import LandingHero from '~/components/landing/LandingHero.vue'
import PhaseOnePanel from '~/components/landing/PhaseOnePanel.vue'
import AboutSection from '~/components/landing/AboutSection.vue'
import HowItWorks from '~/components/landing/HowItWorks.vue'
import PipelineSection from '~/components/landing/PipelineSection.vue'
import CtaSection from '~/components/landing/CtaSection.vue'

definePageMeta({ layout: 'landing' })

useHead({
  title: 'QA-Turbo — Turn BRDs into structured, testable quality',
  meta: [
    {
      name: 'description',
      content:
        'QA-Turbo is a multi-system QA testing environment: turn BRDs into structured, traceable quality across analysis, tests, audit, execution, bugs, and verification.',
    },
  ],
})
</script>
