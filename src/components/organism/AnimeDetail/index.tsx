import { CardLoading } from '@/components/styles'
import { useController } from '@/components/templates/AnimeDetailTemplate/useController'
import { useAnimeDetailCtx } from '@/context/AnimeDetailCtx'
import { useParams } from 'react-router-dom'

export default function AnimeDetail() {
  const { id } = useParams<{ id: string }>()
  const {
    state: { Media },
    setId,
  } = useAnimeDetailCtx()

  setId(parseInt(id ?? '0'))

  const { loading } = useController()

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
      <img src={bannerImage} alt={title.romaji} />
      <img src={coverImage.large} alt={title.romaji} />
      <h2>{title.romaji}</h2>
      <p>{description}</p>
      <span>{episodes}</span>
      <span>{genres}</span>
      <span>{meanScore}</span>
    </div>
  )
}
