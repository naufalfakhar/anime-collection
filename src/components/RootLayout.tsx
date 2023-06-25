import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import { Layout } from '@/components/styles'

export default function RootLayout() {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  )
}
