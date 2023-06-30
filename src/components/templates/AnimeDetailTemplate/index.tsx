import AnimeDetail from '@/components/organism/AnimeDetail'
import AnimeDetailHeader from '@/components/organism/AnimeDetail/Header'
import { TemplateLayout } from '@/components/styles'

export default function AnimeDetailTemplate() {
  return (
    <TemplateLayout>
      <AnimeDetailHeader />
      <AnimeDetail />
    </TemplateLayout>
  )
}
