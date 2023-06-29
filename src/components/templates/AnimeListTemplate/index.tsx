import { AnimeListLayout, PageTitle } from '@/components/styles'
import Pagination from '@/components/organism/AnimeList/Pagination'
import AnimeList from '@/components/organism/AnimeList'

export default function AnimeListTemplate() {
  return (
    <AnimeListLayout>
      <PageTitle>Anime List</PageTitle>
      <AnimeList />
      <Pagination />
    </AnimeListLayout>
  )
}
