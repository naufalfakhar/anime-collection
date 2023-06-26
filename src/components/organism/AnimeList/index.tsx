import { Card, CardLoading } from '@/components/styles'
import { Link } from 'react-router-dom'
import { IAnime } from './types'

type Props = {
  loading: boolean
  media: IAnime[]
}

export default function AnimeList({ loading, media }: Props) {
  if (loading)
    return Array.from(Array(10).keys()).map((_, i) => (
      <CardLoading key={i}>
        <div>
          <div></div>
        </div>
      </CardLoading>
    ))

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
