import {
  AnimeListGroup,
  Card,
  CardImage,
  CardLoading,
  CardOverlay,
  CardSpan,
  CardSpanGroup,
  CardTitle,
} from '@/components/styles'
import { Link } from 'react-router-dom'
import { useController } from './useController'
import { IAnime } from '@/types'

export default function AnimeList() {
  const { media, loading } = useController()

  if (loading)
    return (
      <AnimeListGroup>
        {Array.from(Array(10).keys()).map((_, i) => (
          <CardLoading key={i}>
            <div>
              <div></div>
            </div>
          </CardLoading>
        ))}
      </AnimeListGroup>
    )

  return (
    <AnimeListGroup>
      {media.map((anime: IAnime) => (
        <Card key={anime.id}>
          <Link to={`/anime/${anime.id}`}>
            <CardImage src={anime.coverImage.large} alt={anime.title.romaji} />
            <CardOverlay>
              <CardTitle>{anime.title.romaji}</CardTitle>
              <CardSpanGroup>
                <CardSpan>{anime.season}</CardSpan>
                <CardSpan>{anime.seasonYear}</CardSpan>
              </CardSpanGroup>
            </CardOverlay>
          </Link>
        </Card>
      ))}
    </AnimeListGroup>
  )
}
