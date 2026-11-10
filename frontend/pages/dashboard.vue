<template>
  <div>
    <h1 class="text-[22px] font-semibold m-0 mb-2">Stage 1: BRD Ingestion &amp; Business Analysis</h1>
    <p class="text-qt-mutfg m-0 mb-2">Upload area — full D layout lands in Ticket 1. This proves the app layout renders.</p>
    <p class="text-[13px] text-qt-mutfg m-0 mb-2">Backend health: {{ health || 'checking…' }}</p>
    <p class="text-[13px] m-0">
      <NuxtLink to="/">Landing</NuxtLink> · <NuxtLink to="/login">Login</NuxtLink> · <NuxtLink to="/onboarding">Onboarding</NuxtLink> · <NuxtLink to="/users">Users (admin demo)</NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

definePageMeta({ layout: 'app' })

const config = useRuntimeConfig()
const health = ref<string | null>(null)

onMounted(async () => {
  try {
    const res = await fetch(`${config.public.apiBase}/health`)
    health.value = await res.text()
  } catch {
    health.value = 'backend not reachable'
  }
})
</script>
