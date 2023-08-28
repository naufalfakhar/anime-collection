import { Group, Header, IconButton, PageTitle } from '@/components/styles'
import { Link } from 'react-router-dom'
import { Archive, Home, Plus } from 'lucide-react'
import { useController } from '../useController'

export default function AnimeListHeader() {
  const { handleOpenModalBulkAdd } = useController()

  return (
    <Header desktop-padding-left='23px' desktop-padding-right='23px'>
      <Link to={'/'}>
        <IconButton>
          <Home />
        </IconButton>
      </Link>
      <PageTitle>Anime List</PageTitle>
      <Group>
        <IconButton
          onClick={handleOpenModalBulkAdd}
          custom-background-color='#51e5a1'
        >
          <Plus />
        </IconButton>
        <Link to={'/collection'}>
          <IconButton>
            <Archive />
          </IconButton>
        </Link>
      </Group>
    </Header>
  )
}
