export interface RoleDefinition {
  role: 'admin' | 'analyst' | 'tester' | 'viewer'
  summary: string
  permissions: string[]
}
