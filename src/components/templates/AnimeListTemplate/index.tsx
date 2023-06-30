import { AnimeListLayout } from '@/components/styles'
import Pagination from '@/components/organism/AnimeList/Pagination'
import AnimeList from '@/components/organism/AnimeList'
import AnimeListHeader from '@/components/organism/AnimeList/Header'

export default function AnimeListTemplate() {
  return (
    <AnimeListLayout>
      <AnimeListHeader />
      <AnimeList />
      <Pagination />
    </AnimeListLayout>
  )
}
