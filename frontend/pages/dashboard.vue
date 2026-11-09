<template>
  <div class="flex flex-col h-full">
    <PipelineStepper />
    <div class="flex flex-col lg:flex-row flex-1 min-h-0">
      <IntakePane />
      <AnalysisPane />
    </div>
  </div>
</template>

<script setup lang="ts">
import PipelineStepper from '~/components/dashboard/PipelineStepper.vue'
import IntakePane from '~/components/dashboard/IntakePane.vue'
import AnalysisPane from '~/components/dashboard/AnalysisPane.vue'

definePageMeta({ layout: 'app' })

useHead({
  title: 'QA-Turbo — Stage 1: BRD Intake & Analysis',
})
</script>
