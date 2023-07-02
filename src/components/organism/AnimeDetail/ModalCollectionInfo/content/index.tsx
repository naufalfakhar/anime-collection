import { useController } from '../useController'
import { Link } from 'react-router-dom'
import { ContentCollectionInfo } from '@/components/styles'
import { ICollection } from '@/types'
import { ChevronRight } from 'lucide-react'

export default function ContentModalCollectionInfo() {
  const { currentCollectionList, currentAnime } = useController()

  if (!currentCollectionList) return <p>no collection yet</p>

  const isIncluded = currentCollectionList.some((item: ICollection) => {
    return item.animes.some((anime) => anime.id === currentAnime.id)
  })

  if (!isIncluded && currentCollectionList)
    return <p>not added to any collection</p>

  return (
    <ContentCollectionInfo>
      {currentCollectionList.map((collections: ICollection, i: number) => {
        const isCollected = collections.animes.some(
          (anime) => anime.id === currentAnime.id
        )
        return (
          isCollected && (
            <li key={i}>
              <Link to={`/collection/${collections.name}`}>
                <p>{collections.name}</p>
                <ChevronRight />
              </Link>
            </li>
          )
        )
      })}
    </ContentCollectionInfo>
  )
}
