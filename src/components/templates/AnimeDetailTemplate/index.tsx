import AnimeDetail from '@/components/organism/AnimeDetail'
import AnimeDetailHeader from '@/components/organism/AnimeDetail/Header'
import { AnimeListLayout } from '@/components/styles'

export default function AnimeDetailTemplate() {
  return (
    <AnimeListLayout>
      <AnimeDetailHeader />
      <AnimeDetail />
    </AnimeListLayout>
  )
}
