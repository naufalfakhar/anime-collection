import { Header, IconButton, PageTitle } from '@/components/styles'
import { Link } from 'react-router-dom'
import { useController } from '../useController'
import { Archive, Home } from 'lucide-react'

export default function CollectionDetailHeader() {
  const { isLoading } = useController()

  if (isLoading) return null

  return (
    <Header>
      <Link to={'/'}>
        <IconButton>
          <Home />
        </IconButton>
      </Link>
      <PageTitle>Collection Detail</PageTitle>
      <Link to={'/collection'}>
        <IconButton>
          <Archive />
        </IconButton>
      </Link>
    </Header>
  )
}
