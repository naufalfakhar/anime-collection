import { Link } from 'react-router-dom'
import { useController } from './useController'
import {
  CollectionButtonGroup,
  CollectionListBanner,
  ContentCollectionGroup,
  Button,
  CollectionListGroup,
} from '@/components/styles'
import { IAnime, ICollection } from '@/types'
import { Edit2, Trash2 } from 'lucide-react'

export default function CollectionList() {
  const {
    currentCollectionList,
    handleOpenModalRemoveCollection,
    handleOpenModalEditCollection,
  } = useController()

  if (currentCollectionList === null) {
    return (
      <ContentCollectionGroup>
        <h2>
          There is no collection 🥺, lets create some with plus button in the
          top right of the page
        </h2>
      </ContentCollectionGroup>
    )
  }

  return (
    <ContentCollectionGroup>
      {currentCollectionList.map((collections: ICollection, i: number) => (
        <CollectionListGroup key={i}>
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
            <Button
              custom-color='#f5f5f7'
              custom-background-color='#dc2626'
              onClick={() => handleOpenModalRemoveCollection(collections.name)}
            >
              <Trash2 />
            </Button>
            <Button
              onClick={() => handleOpenModalEditCollection(collections.name)}
              custom-color='#f5f5f7'
              custom-background-color='#3b82f6'
            >
              <Edit2 />
            </Button>
          </CollectionButtonGroup>
        </CollectionListGroup>
      ))}
    </ContentCollectionGroup>
  )
}
