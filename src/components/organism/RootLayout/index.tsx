import { Layout } from '@/components/styles'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
