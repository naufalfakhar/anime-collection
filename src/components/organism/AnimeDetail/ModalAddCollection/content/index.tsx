import * as React from 'react'
import { LabelCheckbox, LabelGroup } from '@/components/styles'
import { useController } from '../useController'
import { IAnime, ICollection } from '@/types'

export default function ContentModalAddCollection() {
  const {
    currentCollectionList,
    Media,
    handleCheckCollection,
    setPrevSelectedCollection,
  } = useController()

  React.useEffect(() => {
    if (currentCollectionList === null) return
    setPrevSelectedCollection(
      currentCollectionList
        .filter((collections: ICollection) => {
          return collections.animes.some(
            (anime: IAnime) => anime.id === Media.id
          )
        })
        .map((collection: ICollection) => collection.name)
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (currentCollectionList === null) return <div>null</div>

  return (
    <LabelGroup>
      {currentCollectionList.map((collections: ICollection, i: number) => {
        const isChecked = collections.animes.some(
          (anime) => anime.id === Media.id
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
    </LabelGroup>
  )
}
