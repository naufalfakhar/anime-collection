import { Link } from 'react-router-dom'
import { useController } from './useController'
import {
  CollectionButton,
  CollectionButtonGroup,
  CollectionListBanner,
  CollectionGroup,
  ContentCollectionGroup,
} from '@/components/styles'
import { IAnime, ICollection } from '@/types'
import { Edit2, Trash2 } from 'lucide-react'

export default function CollectionList() {
  const {
    currentCollectionList,
    handleOpenModalRemoveCollection,
    handleOpenModalEditCollection,
  } = useController()
  return (
    <ContentCollectionGroup>
      {currentCollectionList.map((collections: ICollection, i: number) => (
        <CollectionGroup key={i}>
          <Link to={`/collection/${collections.name}`}>
            <CollectionListBanner
              src={
                collections.animes.map(
                  (anime: IAnime) => anime.bannerImage
                )[0] ?? '/no-image.png'
              }
              alt={collections.name}
            />
            <div>
              <h2>{collections.name}</h2>
              <p>total anime : {collections.animes.length}</p>
            </div>
          </Link>
          <CollectionButtonGroup>
            <CollectionButton
              cc='#f5f5f7'
              cbc='#dc2626'
              onClick={() => handleOpenModalRemoveCollection(collections.name)}
            >
              <Trash2 />
            </CollectionButton>
            <CollectionButton
              onClick={() => handleOpenModalEditCollection(collections.name)}
            >
              <Edit2 />
            </CollectionButton>
          </CollectionButtonGroup>
        </CollectionGroup>
      ))}
    </ContentCollectionGroup>
  )
}
