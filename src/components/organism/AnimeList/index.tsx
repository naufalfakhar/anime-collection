import {
  AnimeListGroup,
  Card,
  CardLoading,
  CardOverlay,
  CardSpan,
  CardTitle,
  Group,
} from '@/components/styles'
import { Link } from 'react-router-dom'
import { useController } from './useController'
import { IAnime } from '@/types'

export default function AnimeList() {
  const { animeList, loading } = useController()

  if (loading)
    return (
      <AnimeListGroup>
        {Array.from(Array(10).keys()).map((_, i) => (
          <CardLoading key={i} />
        ))}
      </AnimeListGroup>
    )

  return (
    <AnimeListGroup>
      {animeList.map((anime: IAnime) => (
        <Card key={anime.id}>
          <Link to={`/anime/${anime.id}`}>
            <img src={anime.coverImage.large} alt={anime.title.romaji} />
            <CardOverlay>
              <CardTitle>{anime.title.romaji}</CardTitle>
              <Group>
                <CardSpan>{anime.season}</CardSpan>
                <CardSpan>{anime.seasonYear}</CardSpan>
              </Group>
            </CardOverlay>
          </Link>
        </Card>
      ))}
    </AnimeListGroup>
  )
}
