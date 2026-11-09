export interface IntakeFile {
  id: string
  name: string
  size: string
  status: 'ANALYZED' | 'STREAMING' | 'DRAFT' | 'PARSE ERROR'
  progress: number
  hint?: string
  meta: string
  error?: string
  selected?: boolean
}
