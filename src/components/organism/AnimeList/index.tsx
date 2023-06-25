import { Card, CardLoading } from '@/components/styles'
import { Link } from 'react-router-dom'
import { IAnime } from './types'
import { useAnimeListCtx } from '@/context/AnimeListCtx'
import { useController } from '@/components/templates/AnimeListTemplate/useController'

export default function AnimeList() {
  const {
    state: { media },
  } = useAnimeListCtx()

  const { loading } = useController()

  if (loading)
    return Array(10).fill(
      <CardLoading>
        <div>
          <div></div>
        </div>
      </CardLoading>
    )

  return media.map((anime: IAnime) => (
    <Card key={anime.id}>
      <Link to={`/anime/${anime.id}`}>
        <img src={anime.coverImage.large} alt={anime.title.romaji} />
        <div>
          <span>{anime.season}</span>
          <span>{anime.seasonYear}</span>
        </div>
        <h2>{anime.title.romaji}</h2>
      </Link>
    </Card>
  ))
}
