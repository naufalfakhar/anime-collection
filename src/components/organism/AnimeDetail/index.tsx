import * as React from 'react'
import { useParams } from 'react-router-dom'
import { useController } from './useController'
import {
  AnimeDetailBanner,
  AnimeDetailContent,
  AnimeDetailContentGroup,
  AnimeDetailCoverImage,
  AnimeDetailDescriptionGroup,
  AnimeDetailGenreGroup,
  AnimeDetailGroup,
  AnimeDetailInfoGroup,
  AnimeDetailTitle,
  AnimeDetailTitleGroup,
  Button,
  ButtonGroup,
} from '@/components/styles'

export default function AnimeDetail() {
  const { id } = useParams<{ id: string }>()

  const {
    Media,
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
  } = Media

  return (
    <AnimeDetailGroup>
      <AnimeDetailBanner
        src={bannerImage ?? '/no-image.png'}
        alt={title.romaji}
      />
      <AnimeDetailContent>
        <AnimeDetailCoverImage src={coverImage.large} alt={title.romaji} />
        <AnimeDetailContentGroup>
          <AnimeDetailTitle>{title.romaji}</AnimeDetailTitle>
          <AnimeDetailTitleGroup>
            <h2>{title.english}</h2>
            <div>.</div>
            <h2>{title.native}</h2>
          </AnimeDetailTitleGroup>
          <AnimeDetailInfoGroup>
            <li>episodes : {episodes}</li>
            <li>score : {meanScore}</li>
            <li>genres : </li>
            <AnimeDetailGenreGroup>
              {genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </AnimeDetailGenreGroup>
          </AnimeDetailInfoGroup>
        </AnimeDetailContentGroup>
        <AnimeDetailDescriptionGroup>
          <h2>{title.romaji} description</h2>
          <p>{description}</p>
        </AnimeDetailDescriptionGroup>
      </AnimeDetailContent>
      <ButtonGroup>
        <Button onClick={handleOpenModalAddCollection}>
          add to collection
        </Button>
        <Button onClick={handleOpenModalCollectionInfo}>collection info</Button>
      </ButtonGroup>
    </AnimeDetailGroup>
  )
}
