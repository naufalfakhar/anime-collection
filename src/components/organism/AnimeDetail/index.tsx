import * as React from 'react'
import { useParams } from 'react-router-dom'
import { useController } from './useController'
import {
  AnimeDetailBanner,
  AnimeDetailButton,
  AnimeDetailButtonGroup,
  AnimeDetailContent,
  AnimeDetailContentGroup,
  AnimeDetailCoverImage,
  AnimeDetailDescriptionGroup,
  AnimeDetailGenreGroup,
  AnimeDetailInfoGroup,
  AnimeDetailTitle,
  AnimeDetailTitleGroup,
} from '@/components/styles'
import { Plus, Info } from 'lucide-react'

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
    <div>
      <AnimeDetailBanner
        src={bannerImage ?? '/no-image.png'}
        alt={title.romaji}
      />
      <AnimeDetailContent>
        <AnimeDetailCoverImage src={coverImage.large} alt={title.romaji} />
        <AnimeDetailContentGroup>
          <AnimeDetailTitle>{title.romaji}</AnimeDetailTitle>
          <AnimeDetailInfoGroup>
            <li>
              alternative title :
              <AnimeDetailTitleGroup>
                <h2>{title.english}</h2>
                <div>|</div>
                <h2>{title.native}</h2>
              </AnimeDetailTitleGroup>
            </li>
            <li>episodes : {episodes}</li>
            <li>score : {meanScore}</li>
            <li>genres : </li>
            <AnimeDetailGenreGroup>
              {genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </AnimeDetailGenreGroup>
            <AnimeDetailButtonGroup>
              <AnimeDetailButton onClick={handleOpenModalCollectionInfo}>
                <Info />
              </AnimeDetailButton>
              <AnimeDetailButton onClick={handleOpenModalAddCollection}>
                <Plus />
              </AnimeDetailButton>
            </AnimeDetailButtonGroup>
          </AnimeDetailInfoGroup>
        </AnimeDetailContentGroup>

        <AnimeDetailDescriptionGroup>
          <h2>{title.romaji} description</h2>
          <p>{description}</p>
        </AnimeDetailDescriptionGroup>
      </AnimeDetailContent>
    </div>
  )
}
