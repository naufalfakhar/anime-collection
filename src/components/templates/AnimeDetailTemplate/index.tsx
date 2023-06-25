import AnimeDetail from '@/components/organism/AnimeDetail'
import { AnimeListLayout } from '@/components/styles'

export default function AnimeDetailTemplate() {
  return (
    <AnimeListLayout>
      <h1>Anime Detail</h1>
      <AnimeDetail />
    </AnimeListLayout>
  )
}
