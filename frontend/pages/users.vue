<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col xl:flex-row xl:items-start justify-between gap-3">
      <div class="flex flex-col gap-1">
        <h1 class="text-xl font-bold text-qt-fg tracking-tight m-0">Team &amp; Access</h1>
        <p class="text-sm text-qt-mutfg m-0">Manage workspace members and their pipeline roles — admin only.</p>
      </div>
      <button class="min-h-[44px] px-4 bg-qt-blue hover:bg-qt-blue-hover text-white rounded-qt-sm text-sm font-bold cursor-pointer shrink-0" type="button" @click="showDialog = true">
        Add team member
      </button>
    </div>

    <div class="grid gap-4 xl:grid-cols-[1fr_320px] items-start">
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2 text-xs text-qt-mutfg">
          <span class="font-mono uppercase tracking-wider">Users ({{ users.length }})</span>
          <span aria-hidden="true">·</span>
          <span>{{ activeUser ? `Selected: ${activeUser.name}` : 'No row selected' }}</span>
        </div>
        <TeamTable :users="users" :active-user-id="activeUserId" @select="selectUser" />
      </div>
      <RolesLegend />
    </div>

    <CreateUserDialog v-if="showDialog" @close="showDialog = false" @create="createUser" />
  </div>
</template>

<script setup lang="ts">
import TeamTable from '~/components/users/TeamTable.vue'
import RolesLegend from '~/components/users/RolesLegend.vue'
import CreateUserDialog from '~/components/users/CreateUserDialog.vue'
import type { TeamUser } from '~/components/users/types/TeamUser'

definePageMeta({ layout: 'app' })

useHead({
  title: 'QA-Turbo — Team & Access',
})

const users = ref<TeamUser[]>([
  { id: 'usr_0001', name: 'Islam Abu Sleem', email: 'islam@qa-turbo.local', role: 'admin', status: 'active', lastLogin: '2026-11-11 09:14 UTC' },
  { id: 'usr_0002', name: 'Aisha Rahman', email: 'aisha@qa-turbo.local', role: 'analyst', status: 'active', lastLogin: '2026-11-10 16:02 UTC' },
  { id: 'usr_0003', name: 'Marcus Lee', email: 'marcus@qa-turbo.local', role: 'tester', status: 'active', lastLogin: '2026-11-09 11:48 UTC' },
  { id: 'usr_0004', name: 'Sara Haddad', email: 'sara@qa-turbo.local', role: 'viewer', status: 'invited', lastLogin: '—' },
])

const activeUserId = ref<string | null>(null)
const showDialog = ref(false)

const activeUser = computed(() => users.value.find(u => u.id === activeUserId.value) ?? null)

function selectUser(user: TeamUser): void {
  activeUserId.value = user.id
}

function createUser(payload: { name: string; email: string; role: TeamUser['role']; password: string }): void {
  const id = `usr_${String(users.value.length + 1).padStart(4, '0')}`
  users.value = [
    ...users.value,
    { id, name: payload.name, email: payload.email, role: payload.role, status: 'invited', lastLogin: '—' },
  ]
  activeUserId.value = id
  showDialog.value = false
  // TODO: POST /users with the temporary password — owner wires the API call (Ticket 1 auth backend).
}
</script>
