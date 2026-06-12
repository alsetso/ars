import { redirect } from 'next/navigation'

// Legacy route — redirects to the unified pipeline view
export default function ProspectsRedirect() {
  redirect('/admin/pipeline?source=map')
}
