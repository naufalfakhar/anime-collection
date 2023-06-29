import CollectionList from '@/components/organism/CollectionList'
import { useController } from '@/components/organism/CollectionList/useController'
import { AnimeListLayout, PageTitle } from '@/components/styles'

export default function CollectionListTemplate() {
  const { handleOpenModalAddCollection } = useController()
  return (
    <AnimeListLayout>
      <PageTitle>Collection List</PageTitle>
      <button onClick={handleOpenModalAddCollection}>add</button>
      <CollectionList />
    </AnimeListLayout>
  )
}
