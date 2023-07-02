import * as React from 'react'
import { useController } from './useController'
import { IAnime } from '@/types'
import { Link, useParams } from 'react-router-dom'
import {
  AnimeDetailGenreGroup,
  Button,
  CollectionDetailBanner,
  CollectionDetailButton,
  CollectionDetailCover,
  CollectionDetailInfoGroup,
  CollectionGroup,
  ContentCollectionGroup,
  Group,
  InfoGroup,
  TitleGroup,
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
    <ContentCollectionGroup>
      <CollectionDetailBanner
        src={
          selectedCollection.animes.map(
            (anime: IAnime) => anime.bannerImage
          )[0] ?? '/no-image.png'
        }
        alt={selectedCollection.name}
      />
      <Group>
        <h2>{selectedCollection.name}</h2>
        <Button
          custom-color='#f5f5f7'
          custom-background-color='#3b82f6'
          onClick={() => handleOpenModalEditCollection(selectedCollection.name)}
        >
          <Edit2 />
        </Button>
      </Group>
      <CollectionDetailInfoGroup>
        {selectedCollection.animes.map((anime: IAnime) => (
          <li key={anime.id}>
            <CollectionGroup>
              <Link to={`/anime/${anime.id}`}>
                <CollectionDetailCover src={anime.coverImage.large} alt='' />
                <InfoGroup>
                  <li>
                    alternative title :
                    <TitleGroup>
                      <h2>{anime.title.english}</h2>
                      <div>|</div>
                      <h2>{anime.title.native}</h2>
                    </TitleGroup>
                  </li>
                  <li>type : {anime.type}</li>
                  <li>format : {anime.format}</li>
                  <li>episodes : {anime.episodes}</li>
                  <li>
                    season : {anime.season} {anime.seasonYear}
                  </li>
                  <li>status : {anime.status}</li>
                  <li>score : {anime.meanScore}</li>
                  <li>
                    genres :
                    <AnimeDetailGenreGroup>
                      {anime.genres.map((genre, index) => (
                        <span key={index}>{genre}</span>
                      ))}
                    </AnimeDetailGenreGroup>
                  </li>
                </InfoGroup>
              </Link>
              <CollectionDetailButton
                custom-color='#f5f5f7'
                custom-background-color='#dc2626'
                onClick={() => handleOpenModalRemoveAnime(anime.title.romaji)}
              >
                <Trash2 />
              </CollectionDetailButton>
            </CollectionGroup>
          </li>
        ))}
      </CollectionDetailInfoGroup>
    </ContentCollectionGroup>
  )
}
