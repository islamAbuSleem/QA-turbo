<template>
  <section class="border-t border-qt-bd bg-white">
    <div class="max-w-[1100px] mx-auto px-5 py-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
      <div>
        <h2 class="text-2xl font-semibold m-0 mb-2 tracking-tight">Start with Phase 1</h2>
        <p class="text-qt-mutfg m-0 max-w-[60ch]">
          Create a workspace, upload a BRD, and shape the analysis contract. Auth, storage, and downstream agents
          land step by step.
        </p>
      </div>
      <div class="flex flex-wrap gap-3 shrink-0">
        <NuxtLink
          to="/onboarding"
          class="inline-flex items-center justify-center min-h-[44px] px-5 rounded-qt-sm font-semibold bg-qt-blue text-white no-underline hover:bg-qt-blue-hover hover:no-underline"
        >
          Get started
        </NuxtLink>
        <NuxtLink
          to="/login"
          class="inline-flex items-center justify-center min-h-[44px] px-5 rounded-qt-sm font-semibold bg-white text-qt-fg border border-qt-bd no-underline hover:bg-qt-bg hover:no-underline"
        >
          Sign in
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
