import AnimeDetail from '@/components/organism/AnimeDetail'
import { AnimeListLayout, PageTitle } from '@/components/styles'

export default function AnimeDetailTemplate() {
  return (
    <AnimeListLayout>
      <PageTitle>Anime Detail</PageTitle>
      <AnimeDetail />
    </AnimeListLayout>
  )
}
