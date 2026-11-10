<template>
  <div class="min-h-screen bg-qt-bg text-qt-fg flex flex-col">
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-white focus:text-qt-fg focus:border focus:border-qt-bd focus:rounded-qt-sm focus:px-3 focus:py-2"
    >
      Skip to content
    </a>
    <header class="h-14 bg-white/95 border-b border-qt-bd flex items-center gap-3 px-5 sticky top-0 z-10 backdrop-blur">
      <NuxtLink to="/" class="flex items-center gap-2 no-underline text-qt-fg hover:no-underline" aria-label="QA-Turbo home">
        <span class="bg-qt-blue text-white w-7 h-7 rounded-qt-sm grid place-items-center font-bold text-[15px]" aria-hidden="true">Q</span>
        <span class="flex items-center gap-1.5"><b>QA-Turbo</b><span class="hidden sm:inline font-mono text-[10px] font-semibold text-qt-mutfg bg-qt-mut border border-qt-bd rounded px-1 py-0.5">v2.4</span></span>
      </NuxtLink>
      <nav class="ml-auto flex items-center gap-1 sm:gap-2 text-sm" aria-label="Primary">
        <a href="#pipeline" class="hidden md:inline text-qt-mutfg hover:text-qt-fg no-underline hover:no-underline px-2 py-1">Pipeline</a>
        <a href="#how" class="hidden md:inline text-qt-mutfg hover:text-qt-fg no-underline hover:no-underline px-2 py-1">How it works</a>
        <a href="#about" class="hidden lg:inline text-qt-mutfg hover:text-qt-fg no-underline hover:no-underline px-2 py-1">About</a>
        <NuxtLink to="/dashboard" class="hidden sm:inline text-qt-mutfg hover:text-qt-fg no-underline hover:no-underline px-2 py-1">App</NuxtLink>
        <NuxtLink to="/login" class="text-qt-mutfg hover:text-qt-fg no-underline hover:no-underline px-2 py-1">Sign in</NuxtLink>
        <NuxtLink
          to="/onboarding"
          class="inline-flex items-center justify-center min-h-[36px] px-4 rounded-qt-sm font-semibold bg-qt-blue text-white no-underline hover:bg-qt-blue-hover hover:no-underline"
        >
          Get started
        </NuxtLink>
      </nav>
    </header>
    <main id="main" class="flex-1">
      <slot />
    </main>
    <footer class="border-t border-qt-bd bg-white px-5 py-6 text-sm text-qt-mutfg">
      <div class="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <p class="m-0">QA-Turbo — QA testing platform. NestJS + Nuxt.</p>
        <p class="m-0 font-mono text-xs">Phase 1: BRD → structured analysis · PIPELINE_STATUS: ACTIVE_SLICE</p>
      </div>
    </footer>
  </div>
</template>
