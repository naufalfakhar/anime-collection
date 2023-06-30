import { Link } from 'react-router-dom'
import { useController } from './useController'
import {
  Button,
  CollectionButtonGroup,
  CollectionDetailBanner,
  CollectionGroup,
  ContentCollectionGroup,
} from '@/components/styles'
import { TCollections, TMedia } from '@/context/AnimeDetailCtx/types'

export default function CollectionList() {
  const {
    currentCollectionList,
    handleOpenModalRemoveCollection,
    handleOpenModalEditCollection,
  } = useController()
  return (
    <ContentCollectionGroup>
      {currentCollectionList.map((collections: TCollections, i: number) => (
        <CollectionGroup key={i}>
          <Link to={`/collection/${i}`}>
            <CollectionDetailBanner
              src={
                collections.animes.map(
                  (anime: TMedia) => anime.bannerImage
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
              onClick={() => handleOpenModalRemoveCollection(collections.name)}
            >
              remove
            </Button>
            <Button
              onClick={() => handleOpenModalEditCollection(collections.name)}
            >
              edit
            </Button>
          </CollectionButtonGroup>
        </CollectionGroup>
      ))}
    </ContentCollectionGroup>
  )
}
