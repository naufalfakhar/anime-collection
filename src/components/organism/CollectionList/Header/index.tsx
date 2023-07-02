import { Header, IconButton, PageTitle } from '@/components/styles'
import { Link } from 'react-router-dom'
import { useController } from '../useController'
import { Home, Plus } from 'lucide-react'

export default function CollectionListHeader() {
  const { handleOpenModalAddCollection } = useController()
  return (
    <Header>
      <Link to={'/'}>
        <IconButton>
          <Home />
        </IconButton>
      </Link>
      <PageTitle>Collection List</PageTitle>
      <IconButton
        onClick={handleOpenModalAddCollection}
        custom-background-color='#51e5a1'
      >
        <Plus />
      </IconButton>
    </Header>
  )
}
