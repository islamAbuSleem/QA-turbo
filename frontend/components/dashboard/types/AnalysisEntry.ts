export interface AnalysisEntry {
  id: string
  type: 'REQ' | 'RULE' | 'EDGE'
  logic: string
  detail: string
  actor: string
  priority: string
  priorityLevel: 'P0' | 'P1' | 'P2'
}
