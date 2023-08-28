import { LabelCheckbox, GroupCol } from '@/components/styles'
import { useController } from '../useController'
import { ICollection } from '@/types'

export default function ContentModalAddToCollection() {
  const { currentCollectionList, currentAnime, handleCheckCollection } =
    useController()

  if (currentCollectionList === null)
    return <div>there is no collection yet</div>

  return (
    <GroupCol>
      {currentCollectionList.map((collections: ICollection, i: number) => {
        const isChecked = collections.animes.some(
          (anime) => anime.id === currentAnime.id
        )
        return (
          <LabelCheckbox key={i}>
            <input
              type='checkbox'
              name={collections.name}
              defaultChecked={isChecked}
              onChange={handleCheckCollection}
            />
            <p>{collections.name}</p>
          </LabelCheckbox>
        )
      })}
    </GroupCol>
  )
}
