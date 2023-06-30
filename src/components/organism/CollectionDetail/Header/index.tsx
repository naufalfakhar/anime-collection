import { Header, PageTitle } from '@/components/styles'
import { Link } from 'react-router-dom'
import { useController } from '../useController'

export default function CollectionDetailHeader() {
  const { isLoading } = useController()

  if (isLoading) return null

  return (
    <Header>
      <Link to={'/'}>AniCollect</Link>
      <PageTitle>Collection Detail</PageTitle>
      <Link to={'/collection'}>Collection</Link>
    </Header>
  )
}
