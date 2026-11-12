<template>
  <div class="fixed inset-0 z-40 flex items-center justify-center bg-qt-fg/40 p-4" role="dialog" aria-modal="true" aria-labelledby="create-user-title">
    <div class="bg-white border border-qt-bd rounded-qt w-full max-w-[440px] p-5 shadow-xl">
      <div class="flex items-center justify-between mb-3">
        <h2 id="create-user-title" class="text-lg font-semibold text-qt-fg m-0">Add team member</h2>
        <button class="min-h-[44px] min-w-[44px] grid place-items-center text-qt-mutfg hover:text-qt-fg rounded-qt-sm cursor-pointer" type="button" aria-label="Close dialog" @click="emit('close')">✕</button>
      </div>

      <form class="grid gap-1" novalidate @submit.prevent="submit">
        <label class="block text-sm font-semibold mt-2 mb-1.5" for="new-name">Full name</label>
        <input id="new-name" v-model.trim="form.name" class="w-full min-h-[44px] px-3 py-2.5 border border-qt-bd rounded-qt-sm font-sans bg-white focus:outline focus:outline-2 focus:outline-qt-blue focus:outline-offset-1 focus:border-qt-blue" type="text" required>

        <label class="block text-sm font-semibold mt-4 mb-1.5" for="new-email">Email</label>
        <input id="new-email" v-model.trim="form.email" class="w-full min-h-[44px] px-3 py-2.5 border border-qt-bd rounded-qt-sm font-sans bg-white focus:outline focus:outline-2 focus:outline-qt-blue focus:outline-offset-1 focus:border-qt-blue" type="email" required>

        <label class="block text-sm font-semibold mt-4 mb-1.5" for="new-role">Pipeline role</label>
        <select id="new-role" v-model="form.role" class="w-full min-h-[44px] px-3 py-2.5 border border-qt-bd rounded-qt-sm font-sans bg-white focus:outline focus:outline-2 focus:outline-qt-blue focus:outline-offset-1 focus:border-qt-blue">
          <option v-for="r in roles" :key="r" :value="r">{{ r }}</option>
        </select>

        <label class="block text-sm font-semibold mt-4 mb-1.5" for="new-password">Temporary password</label>
        <div class="flex gap-2">
          <input id="new-password" v-model.trim="form.password" class="w-full min-h-[44px] px-3 py-2.5 border border-qt-bd rounded-qt-sm font-mono bg-white focus:outline focus:outline-2 focus:outline-qt-blue focus:outline-offset-1 focus:border-qt-blue" type="text" required>
          <button class="min-h-[44px] px-3 border border-qt-bd rounded-qt-sm text-sm font-semibold text-qt-fg hover:bg-qt-mut cursor-pointer shrink-0" type="button" @click="regenerate">Regenerate</button>
          <button class="min-h-[44px] px-3 border border-qt-bd rounded-qt-sm text-sm font-semibold text-qt-fg hover:bg-qt-mut cursor-pointer shrink-0" type="button" @click="copyPassword">{{ copied ? 'Copied' : 'Copy' }}</button>
        </div>
        <p class="text-xs text-qt-mutfg m-0 mt-1.5">User must reset this password on first sign-in.</p>

        <p v-if="error" class="bg-qt-red-bg border border-qt-red-bd text-qt-red-fg rounded-qt-sm p-3 mt-4 text-sm m-0" role="alert">{{ error }}</p>

        <div class="flex justify-end gap-2 mt-5">
          <button class="min-h-[44px] px-4 border border-qt-bd rounded-qt-sm text-sm font-semibold text-qt-fg hover:bg-qt-mut cursor-pointer" type="button" @click="emit('close')">Cancel</button>
          <button class="min-h-[44px] px-4 bg-qt-blue hover:bg-qt-blue-hover text-white rounded-qt-sm text-sm font-bold cursor-pointer" type="submit">Create user</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import type { UserRole } from '~/components/users/types/TeamUser'

const emit = defineEmits<{
  (event: 'close'): void
  (event: 'create', payload: { name: string; email: string; role: UserRole; password: string }): void
}>()

const roles: UserRole[] = ['admin', 'analyst', 'tester', 'viewer']

const generatePassword = (): string => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%'
  return Array.from({ length: 14 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}

const form = reactive({
  name: '',
  email: '',
  role: 'analyst' as UserRole,
  password: generatePassword(),
})
const error = ref('')
const copied = ref(false)

function regenerate(): void {
  form.password = generatePassword()
}

async function copyPassword(): Promise<void> {
  try {
    await navigator.clipboard.writeText(form.password)
    copied.value = true
    setTimeout(() => { copied.value = false }, 1500)
  } catch {
    copied.value = false
  }
}

watch(() => form.email, () => {
  error.value = ''
})

function submit(): void {
  if (!form.name || !form.email || !form.password) {
    error.value = 'Name, email and temporary password are required.'
    return
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    error.value = 'Enter a valid email address.'
    return
  }
  emit('create', { name: form.name, email: form.email, role: form.role, password: form.password })
}
</script>
