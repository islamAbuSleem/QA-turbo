/**
 * Column definition for the shared `QtDataTable` component.
 * Consumers type their column arrays with this interface; the component
 * mirrors the same shape inline (Vite cannot resolve imported types for
 * `defineProps` in dev).
 */
export interface DataTableColumn {
  key: string
  label: string
  align?: 'left' | 'center' | 'right'
  sortable?: boolean
  width?: string
}
