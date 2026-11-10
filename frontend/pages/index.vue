<template>
  <div>
    <section class="border-b border-qt-bd bg-white">
      <div class="max-w-[1100px] mx-auto px-5 pt-12 pb-12 md:pt-16 md:pb-16">
        <p class="font-mono text-[11px] text-qt-mutfg bg-qt-bg border border-qt-bd rounded-qt-sm px-3 py-1.5 m-0 mb-4 inline-block">
          BUILD_SPEC: QA-TURBO-L1 // PIPELINE_STATUS: ACTIVE_SLICE // SPEC_REV: 4.18.2
        </p>
        <div class="grid gap-10 md:grid-cols-[1.15fr_.85fr] items-start">
          <LandingHero />
          <LandingPhaseOnePanel />
        </div>
      </div>
    </section>

    <LandingAboutSection />
    <LandingHowItWorks />
    <LandingPipelineSection />
    <LandingCtaSection />
  </div>
</template>

<script setup lang="ts">
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
