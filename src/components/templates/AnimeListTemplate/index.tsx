import { TemplateLayout } from '@/components/styles'
import Pagination from '@/components/organism/AnimeList/Pagination'
import AnimeList from '@/components/organism/AnimeList'
import AnimeListHeader from '@/components/organism/AnimeList/Header'

export default function AnimeListTemplate() {
  return (
    <TemplateLayout>
      <AnimeListHeader />
      <AnimeList />
      <Pagination />
    </TemplateLayout>
  )
}
