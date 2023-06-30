import { CollectionListButton, Header, PageTitle } from '@/components/styles'
import { Link } from 'react-router-dom'
import { Archive, Plus } from 'lucide-react'
import { useController } from '../useController'

export default function AnimeListHeader() {
  const { handleOpenModalBulkAdd } = useController()
  return (
    <Header>
      <Link to={'/'}>AniCollect</Link>
      <PageTitle>Anime List</PageTitle>
      <div>
        <CollectionListButton onClick={handleOpenModalBulkAdd}>
          <Plus />
        </CollectionListButton>
        <Link to={'/collection'}>
          <Archive />
        </Link>
      </div>
    </Header>
  )
}
