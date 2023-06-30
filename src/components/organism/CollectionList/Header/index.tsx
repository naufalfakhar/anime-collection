import { CollectionListButton, Header, PageTitle } from '@/components/styles'
import { Link } from 'react-router-dom'
import { useController } from '../useController'
import { Plus } from 'lucide-react'

export default function CollectionListHeader() {
  const { handleOpenModalAddCollection } = useController()
  return (
    <Header>
      <Link to={'/'}>AniCollect</Link>
      <PageTitle>Collection List</PageTitle>
      <CollectionListButton onClick={handleOpenModalAddCollection}>
        <Plus />
      </CollectionListButton>
    </Header>
  )
}
