import * as React from 'react'
import { LabelCheckbox, LabelGroup } from '@/components/styles'
import { TCollections, TMedia } from '@/context/AnimeDetailCtx/types'
import { useController } from '../useController'

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
        .filter((collections: TCollections) => {
          return collections.animes.some(
            (anime: TMedia) => anime.id === Media.id
          )
        })
        .map((collection: TCollections) => collection.name)
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (currentCollectionList === null) return <div>null</div>

  return (
    <LabelGroup>
      {currentCollectionList.map((collections: TCollections, i: number) => {
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
