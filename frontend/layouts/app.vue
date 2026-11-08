<template>
  <div class="app-layout">
    <header class="top">
      <span class="logo">Q</span>
      <b>QA-Turbo</b>
      <span class="proj">Project: Checkout Core v2.4 ▾</span>
      <nav class="stages">
        <a href="#">Stage 1: BRD Analysis</a>
        <a href="#">Stage 2: Test Writer</a>
        <a href="#">Stage 3: Execution Matrix</a>
      </nav>
      <span class="chip">OPERATE MODE</span>
      <span class="user">admin</span>
    </header>
    <aside class="side">
      <h3>INTAKE &amp; PARSING</h3>
      <NuxtLink class="on" to="/dashboard">BRD Intake &amp; Rules</NuxtLink>
      <a href="#">Requirement Matrix</a>
      <h3>PIPELINE STAGES</h3>
      <a href="#">Test Writer</a>
      <a href="#">Execution Matrix</a>
      <h3>WORKSPACE ADMIN</h3>
      <a href="/users">Team &amp; Access</a>
    </aside>
    <main class="content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
:root { --blue: #2563EB; --bg: #F8FAFC; --fg: #0F172A; --bd: #E4ECFC; --mutfg: #475569; }
.app-layout { display: grid; grid-template-columns: 240px 1fr; grid-template-rows: 56px 1fr; min-height: 100vh; font-family: 'Fira Sans', system-ui, sans-serif; color: #0F172A; }
.top { grid-column: 1 / -1; display: flex; align-items: center; gap: 12px; padding: 0 20px; background: #fff; border-bottom: 1px solid #E4ECFC; }
.logo { background: #2563EB; color: #fff; width: 28px; height: 28px; border-radius: 8px; display: grid; place-items: center; font-weight: 700; }
.proj, .stages a { color: #475569; font-size: 13px; text-decoration: none; }
.stages { display: flex; gap: 16px; margin-left: 16px; }
.chip { font-size: 12px; font-weight: 600; padding: 2px 8px; border-radius: 999px; border: 1px solid #E4ECFC; background: #F1F5FD; }
.user { margin-left: auto; font-size: 12px; font-weight: 600; padding: 2px 8px; border-radius: 999px; background: #DBEAFE; color: #1E40AF; }
.side { border-right: 1px solid #E4ECFC; padding: 16px 12px; display: flex; flex-direction: column; gap: 4px; background: #fff; }
.side h3 { font-size: 11px; letter-spacing: .08em; color: #475569; margin: 12px 8px 4px; }
.side a { padding: 8px 12px; border-radius: 8px; color: #0F172A; text-decoration: none; font-size: 14px; }
.side a.on { background: #2563EB; color: #fff; }
.content { padding: 20px; background: #F8FAFC; }
@media (max-width: 900px) { .app-layout { grid-template-columns: 1fr; } .side { flex-direction: row; flex-wrap: wrap; } .side h3 { width: 100%; } }
</style>
