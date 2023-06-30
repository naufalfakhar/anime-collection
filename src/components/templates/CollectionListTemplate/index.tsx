import CollectionList from '@/components/organism/CollectionList'
import CollectionListHeader from '@/components/organism/CollectionList/Header'
import { AnimeListLayout } from '@/components/styles'

export default function CollectionListTemplate() {
  return (
    <AnimeListLayout>
      <CollectionListHeader />
      <CollectionList />
    </AnimeListLayout>
  )
}
