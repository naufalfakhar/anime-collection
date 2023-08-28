import * as React from 'react'
import { useParams } from 'react-router-dom'
import { useController } from './useController'
import {
  AnimeDetailButtonGroup,
  AnimeDetailContent,
  AnimeDetailContentGroup,
  AnimeDetailCoverImage,
  AnimeDetailDescriptionGroup,
  AnimeDetailGenreGroup,
  Banner,
  IconButton,
  InfoGroup,
  Title,
  TitleGroup,
} from '@/components/styles'
import { Plus, Info } from 'lucide-react'

export default function AnimeDetail() {
  const { id } = useParams<{ id: string }>()

  const {
    currentAnime,
    loading,
    setId,
    handleOpenModalAddCollection,
    handleOpenModalCollectionInfo,
  } = useController()

  React.useEffect(() => {
    setId(parseInt(id ?? '0'))
  }, [id, setId])

  if (loading) return <div>loading...</div>

  const {
    bannerImage,
    coverImage,
    title,
    description,
    episodes,
    genres,
    meanScore,
    type,
    format,
    status,
    season,
    seasonYear,
  } = currentAnime

  return (
    <div>
      <Banner>
        <img src={bannerImage ?? '/no-image.png'} alt={title.romaji} />
        <div></div>
      </Banner>
      <AnimeDetailContent>
        <AnimeDetailCoverImage src={coverImage.large} alt={title.romaji} />
        <AnimeDetailContentGroup>
          <Title>{title.romaji}</Title>
          <InfoGroup>
            <li>
              alternative title :
              <TitleGroup>
                <h2>{title.english}</h2>
                <div>|</div>
                <h2>{title.native}</h2>
              </TitleGroup>
            </li>
            <li>type : {type}</li>
            <li>format : {format}</li>
            <li>episodes : {episodes}</li>
            <li>
              season : {season} {seasonYear}
            </li>
            <li>status : {status}</li>
            <li>score : {meanScore}</li>
            <li>
              genres :
              <AnimeDetailGenreGroup>
                {genres.map((genre, index) => (
                  <span key={index}>{genre}</span>
                ))}
              </AnimeDetailGenreGroup>
            </li>
            <AnimeDetailButtonGroup>
              <IconButton onClick={handleOpenModalCollectionInfo}>
                <Info />
              </IconButton>
              <IconButton
                onClick={handleOpenModalAddCollection}
                custom-background-color='#51e5a1'
              >
                <Plus />
              </IconButton>
            </AnimeDetailButtonGroup>
          </InfoGroup>
        </AnimeDetailContentGroup>

        <AnimeDetailDescriptionGroup>
          <h2>{title.romaji} description</h2>
          <p>{description}</p>
        </AnimeDetailDescriptionGroup>
      </AnimeDetailContent>
    </div>
  )
}
