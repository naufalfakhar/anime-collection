import * as React from 'react'
import { TCollections } from '@/context/AnimeDetailCtx/types'
import { useController } from '../useController'
import { Link } from 'react-router-dom'

export default function ContentModalCollectionInfo() {
  const { currentCollectionList, Media } = useController()

  if (currentCollectionList === null) return <div>null</div>

  return (
    <ul>
      {currentCollectionList.map((collections: TCollections, i: number) => {
        const isCollected = collections.animes.some(
          (anime) => anime.id === Media.id
        )

        return (
          isCollected && (
            <li key={i}>
              <Link
                to={`/collections/${collections.animes.map(
                  (anime) => anime.id
                )}`}
              >
                {collections.name}
              </Link>
            </li>
          )
        )
      })}
    </ul>
  )
}
