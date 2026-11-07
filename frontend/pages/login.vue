<template>
  <section class="bg-white border border-qt-bd rounded-qt p-6 w-full">
    <h1 class="text-2xl font-semibold m-0 leading-tight tracking-tight">Welcome back</h1>
    <p class="text-qt-mutfg mt-1 mb-0 max-w-[65ch]">Sign in to continue to Stage 1: BRD Upload.</p>

    <form novalidate @submit.prevent="onSubmit">
      <label class="block text-sm font-semibold mt-4 mb-1.5" for="email">Email</label>
      <input
        id="email"
        ref="emailRef"
        class="w-full min-h-[44px] px-3 py-2.5 border border-qt-bd rounded-qt-sm font-sans bg-white focus:outline focus:outline-2 focus:outline-qt-blue focus:outline-offset-1 focus:border-qt-blue"
        type="email"
        autocomplete="email"
        value="admin@qa-turbo.local"
        required
      >

      <label class="block text-sm font-semibold mt-4 mb-1.5" for="pw">Password</label>
      <input
        id="pw"
        ref="pwRef"
        class="w-full min-h-[44px] px-3 py-2.5 border border-qt-bd rounded-qt-sm font-sans bg-white focus:outline focus:outline-2 focus:outline-qt-blue focus:outline-offset-1 focus:border-qt-blue"
        type="password"
        autocomplete="current-password"
        value="••••••••"
        required
      >

      <div class="flex justify-between items-center mt-4 text-sm">
        <label class="m-0 flex gap-2 items-center font-normal">
          <input id="remember" type="checkbox" class="w-auto min-h-0" checked>
          Remember me
        </label>
        <a href="#" class="text-qt-blue no-underline hover:underline">Forgot password?</a>
      </div>

      <div v-if="showError" class="bg-qt-red-bg border border-qt-red-bd text-qt-red-fg rounded-qt-sm p-3 mt-4 text-sm" role="alert">
        Invalid email or password. Check and try again.
      </div>

      <button class="inline-flex items-center justify-center min-h-[44px] px-5 border-0 rounded-qt-sm font-semibold bg-qt-blue text-white w-full mt-5 cursor-pointer hover:bg-qt-blue-hover" type="submit">
        Sign In →
      </button>
    </form>

    <p class="text-sm text-qt-mutfg text-center mt-4">
      No account yet? <NuxtLink to="/onboarding" class="text-qt-blue no-underline hover:underline">Create project + admin</NuxtLink>
    </p>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({ layout: 'auth' })

const emailRef = ref<HTMLInputElement | null>(null)
const pwRef = ref<HTMLInputElement | null>(null)
const showError = ref(true) // demo: matches concept-f; wire to real auth state later

function onSubmit(): void {
  // TODO: POST /auth/login via useRuntimeConfig().public.apiBase — owner writes guard logic (Ticket 1).
  console.log('login submit (demo only)', emailRef.value?.value)
}
</script>
