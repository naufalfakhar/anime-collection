import { Outlet } from 'react-router-dom'
import { Layout } from '@/components/styles'

export default function RootLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
