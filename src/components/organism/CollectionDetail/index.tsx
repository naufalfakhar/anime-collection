import * as React from 'react'
import { useController } from './useController'
import { IAnime } from '@/types'
import { Link, useParams } from 'react-router-dom'
import {
  AnimeDetailGenreGroup,
  AnimeDetailTitleGroup,
  CollectionButton,
  CollectionDetailBanner,
  CollectionDetailButton,
  CollectionDetailEditNameGroup,
  CollectionDetailInfoGroup,
  CollectionGroup,
  ContentCollectionDetailGroup,
} from '@/components/styles'
import { Edit2, Trash2 } from 'lucide-react'

export default function CollectionDetail() {
  const { id } = useParams<{ id: string }>()

  const {
    setName,
    isLoading,
    selectedCollection,
    handleOpenModalEditCollection,
    handleOpenModalRemoveAnime,
  } = useController()

  React.useEffect(() => {
    if (id) setName(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  if (isLoading) return <div>loading...</div>

  return (
    <ContentCollectionDetailGroup>
      <CollectionDetailBanner
        src={
          selectedCollection.animes.map(
            (anime: IAnime) => anime.bannerImage
          )[0] ?? '/no-image.png'
        }
        alt={selectedCollection.name}
      />
      <CollectionDetailEditNameGroup>
        <h2>{selectedCollection.name}</h2>
        <CollectionButton
          cc='#f5f5f7'
          cbc='#1d1d1f'
          onClick={() => handleOpenModalEditCollection(selectedCollection.name)}
        >
          <Edit2 />
        </CollectionButton>
      </CollectionDetailEditNameGroup>
      <CollectionDetailInfoGroup>
        {selectedCollection.animes.map((anime: IAnime) => (
          <li key={anime.id}>
            <CollectionGroup>
              <Link to={`/anime/${anime.id}`}>
                <img src={anime.coverImage.large} alt='' />
                <div>
                  <h2>{anime.title.romaji}</h2>
                  <ul>
                    <li>{anime.season}</li>
                    <li>{anime.seasonYear}</li>
                    <li>
                      alternative title :
                      <AnimeDetailTitleGroup>
                        <h2>{anime.title.english}</h2>
                        <div>|</div>
                        <h2>{anime.title.native}</h2>
                      </AnimeDetailTitleGroup>
                    </li>
                    <li>episodes : {anime.episodes}</li>
                    <li>score : {anime.meanScore}</li>
                    <li>genres : </li>
                    <AnimeDetailGenreGroup>
                      {anime.genres.map((genre, index) => (
                        <li key={index}>{genre}</li>
                      ))}
                    </AnimeDetailGenreGroup>
                  </ul>
                </div>
              </Link>
              <CollectionDetailButton
                cc='#f5f5f7'
                cbc='#dc2626'
                onClick={() => handleOpenModalRemoveAnime(anime.title.romaji)}
              >
                <Trash2 />
              </CollectionDetailButton>
            </CollectionGroup>
          </li>
        ))}
      </CollectionDetailInfoGroup>
    </ContentCollectionDetailGroup>
  )
}
