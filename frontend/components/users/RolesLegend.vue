<template>
  <div class="bg-white border border-qt-bd rounded-qt p-4">
    <h2 class="text-sm font-semibold text-qt-fg m-0 mb-3">Role permissions</h2>
    <ul class="m-0 p-0 list-none grid gap-3">
      <li v-for="def in roles" :key="def.role" class="border border-qt-bd rounded-qt-sm p-3">
        <div class="flex items-center gap-2 mb-1">
          <QtPill :label="def.role" :tone="roleTone[def.role]" />
        </div>
        <p class="text-xs text-qt-mutfg m-0 mb-2">{{ def.summary }}</p>
        <ul class="m-0 p-0 list-none grid gap-1">
          <li v-for="p in def.permissions" :key="p" class="text-xs text-qt-fg flex items-start gap-1.5">
            <span class="text-qt-blue font-mono" aria-hidden="true">→</span>{{ p }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import QtPill from '~/components/QtPill.vue'
import type { RoleDefinition } from '~/components/users/types/RoleDefinition'

const roleTone = {
  admin: 'info',
  analyst: 'success',
  tester: 'warning',
  viewer: 'muted',
} as const

const roles: RoleDefinition[] = [
  { role: 'admin', summary: 'Full control of the workspace.', permissions: ['Manage projects & users', 'Run every pipeline stage', 'Export contracts and reports'] },
  { role: 'analyst', summary: 'Owns requirement intake and analysis.', permissions: ['Upload and analyse BRDs', 'Edit the analysis contract', 'Send specs to Test Writer'] },
  { role: 'tester', summary: 'Authors and executes test cases.', permissions: ['Write and edit test cases', 'Execute suites', 'Raise bug reports'] },
  { role: 'viewer', summary: 'Read-only access to workspace artifacts.', permissions: ['View analyses and tests', 'Download reports', 'No write access'] },
]
</script>
