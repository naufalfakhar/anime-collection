import CollectionList from '@/components/organism/CollectionList'
import CollectionListHeader from '@/components/organism/CollectionList/Header'
import { TemplateLayout } from '@/components/styles'

export default function CollectionListTemplate() {
  return (
    <TemplateLayout>
      <CollectionListHeader />
      <CollectionList />
    </TemplateLayout>
  )
}
