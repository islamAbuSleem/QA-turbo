export type UserRole = 'admin' | 'analyst' | 'tester' | 'viewer'

export type UserStatus = 'active' | 'invited'

export interface TeamUser {
  id: string
  name: string
  email: string
  role: UserRole
  status: UserStatus
  lastLogin: string
}
