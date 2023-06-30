import { Button, Header, PageTitle } from '@/components/styles'
import { Link } from 'react-router-dom'
import { useController } from '../useController'

export default function CollectionListHeader() {
  const { handleOpenModalAddCollection } = useController()
  return (
    <Header>
      <Link to={'/'}>back</Link>
      <PageTitle>Collection List</PageTitle>
      <Button onClick={handleOpenModalAddCollection}>add</Button>
    </Header>
  )
}
