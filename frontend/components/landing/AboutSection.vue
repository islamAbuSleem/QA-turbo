<template>
  <section id="about" class="max-w-[1100px] mx-auto px-5 py-12 md:py-14 scroll-mt-20">
    <div class="grid gap-6 md:grid-cols-[.9fr_1.1fr]">
      <article class="bg-white border border-qt-bd rounded-qt p-6 transition hover:shadow-lg">
        <p class="font-mono text-[11px] font-semibold text-qt-blue m-0 mb-2">WHO WE ARE</p>
        <h2 class="text-2xl font-semibold m-0 mb-3 tracking-tight">QA testing platform, built by doing</h2>
        <p class="text-qt-mutfg m-0 leading-relaxed">
          QA-Turbo is a QA testing platform that turns requirements into verified quality. I’m building and testing
          it myself — every station is a real system I design, code, and verify, so I learn by doing.
        </p>
      </article>
      <article class="bg-white border border-qt-bd rounded-qt p-6 transition hover:shadow-lg">
        <p class="font-mono text-[11px] font-semibold text-qt-blue m-0 mb-2">WHAT WE’RE DOING</p>
        <h2 class="text-2xl font-semibold m-0 mb-3 tracking-tight">Building a traceable 6-station pipeline</h2>
        <p class="text-qt-mutfg m-0 leading-relaxed">
          Requirements become quality artifacts through one chain:
          <span class="font-mono text-[0.92em] text-qt-fg bg-qt-mut border border-qt-bd rounded px-1 py-0.5">BRD → spec → tests → audit → run → bugs → verify</span>.
          Phase 1 starts at the source: structured actors, requirements, rules, edge cases, and open questions — so
          every later step links back to evidence, not black-box guesses.
        </p>
      </article>
    </div>
  </section>
</template>
