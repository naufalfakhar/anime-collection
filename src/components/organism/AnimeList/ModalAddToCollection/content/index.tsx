import { LabelCheckbox, GroupCol } from '@/components/styles'
import { useController } from '../useController'
import { ICollection } from '@/types'

export default function ContentModalAddToCollection() {
  const { currentCollectionList, handleCheckCollection } = useController()

  if (currentCollectionList === null)
    return <div>there is no collection yet</div>

  return (
    <GroupCol>
      {currentCollectionList.map((collections: ICollection, i: number) => {
        return (
          <LabelCheckbox key={i}>
            <input
              type='checkbox'
              name={collections.name}
              onChange={handleCheckCollection}
            />
            <p>{collections.name}</p>
          </LabelCheckbox>
        )
      })}
    </GroupCol>
  )
}
