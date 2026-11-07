<template>
  <section class="card">
    <div class="steps"><span class="on">Step 1 of 2 — Create Project + Admin</span><span>Step 2 — Invite Team</span></div>
    <h1>Create your project</h1>
    <p class="lede">You'll be the admin. Later you can add analysts, testers and viewers.</p>
    <label for="proj">Project name</label>
    <input id="proj" value="Checkout Core">
    <label for="email">Admin email</label>
    <input id="email" type="email" value="admin@qa-turbo.local">
    <label for="pw">Admin password</label>
    <input id="pw" type="password" value="••••••••">
    <label for="pw2">Confirm password</label>
    <input id="pw2" type="password" value="••••••••">
    <button class="btn btn-p">Create Project &amp; Admin →</button>
    <p class="footer">Already have an account? <a href="/login">Login</a></p>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'auth' });
</script>

<style scoped>
.card { background: #fff; border: 1px solid #E4ECFC; border-radius: 12px; padding: 28px; max-width: 480px; width: 100%; }
.steps { display: flex; gap: 8px; margin-bottom: 20px; font-size: 13px; color: #475569; }
.steps span { flex: 1; border: 1px solid #E4ECFC; border-radius: 8px; padding: 8px; text-align: center; }
.steps .on { background: #EFF6FF; border-color: #2563EB; color: #0F172A; }
h1 { font-size: 26px; margin: 0 0 8px; }
.lede { color: #475569; margin: 0 0 8px; }
label { display: block; font-size: 14px; font-weight: 600; margin: 16px 0 6px; }
input { width: 100%; min-height: 44px; padding: 10px 12px; border: 1px solid #E4ECFC; border-radius: 8px; font: inherit; }
.btn { min-height: 44px; padding: 0 20px; border: 0; border-radius: 8px; font-weight: 600; width: 100%; margin-top: 20px; }
.btn-p { background: #2563EB; color: #fff; }
.footer { font-size: 13px; color: #475569; text-align: center; margin-top: 16px; }
</style>
