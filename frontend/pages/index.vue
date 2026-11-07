<template>
  <div>
    <h1 style="font-size: 22px; margin: 0 0 8px">Stage 1: BRD Ingestion &amp; Business Analysis</h1>
    <p style="color: var(--mutfg, #475569)">Upload area — full D layout lands in Ticket 1. This proves the app layout renders.</p>
    <p style="font-size: 13px; color: #475569">Backend health: {{ health || 'checking…' }}</p>
    <p style="font-size: 13px"><a href="/login">Login</a> · <a href="/onboarding">Onboarding</a> · <a href="/users">Users (admin only demo)</a></p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const config = useRuntimeConfig();
const health = ref<string | null>(null);

onMounted(async () => {
  try {
    const res = await fetch(`${config.public.apiBase}/health`);
    health.value = await res.text();
  } catch {
    health.value = 'backend not reachable';
  }
});
</script>
