<template>
  <div class="min-h-screen bg-qt-bg">
    <header class="h-14 bg-white border-b border-qt-bd flex items-center gap-3 px-5">
      <span class="bg-qt-blue text-white w-7 h-7 rounded-qt-sm grid place-items-center font-bold text-[15px]">Q</span>
      <b>QA-Turbo</b>
      <span class="ml-auto text-[13px] text-qt-mutfg">Checkout Core v2.4 ▾</span>
    </header>
    <div class="max-w-[480px] mx-auto my-10 px-4 w-full">
      <slot />
    </div>
  </div>
</template>
