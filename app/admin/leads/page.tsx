import { redirect } from 'next/navigation'

// Legacy route — redirects to the unified pipeline view
export default function LeadsRedirect() {
  redirect('/admin/pipeline?source=website')
}
