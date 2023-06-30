import { TemplateLayout } from '@/components/styles'
import CollectionDetailHeader from '@/components/organism/CollectionDetail/Header'
import CollectionDetail from '@/components/organism/CollectionDetail'

export default function CollectionDetailTemplate() {
  return (
    <TemplateLayout>
      <CollectionDetailHeader />
      <CollectionDetail />
    </TemplateLayout>
  )
}
