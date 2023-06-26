import { LabelGroup } from '@/components/styles'
import { TCollections } from '@/context/AnimeDetailCtx/types'
import { getCollection } from '@/utils'

export default function ContentModalAddCollection() {
  const currentCollectionList = getCollection()

  if (currentCollectionList === null) return <div>null</div>

  return (
    <LabelGroup>
      {currentCollectionList.map((collections: TCollections, i: number) => (
        <label key={i}>
          <input type='checkbox' />
          <span>{collections.name}</span>
        </label>
      ))}
    </LabelGroup>
  )
}
