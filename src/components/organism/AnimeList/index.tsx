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
                {/* <CardSpan>
                  <svg
                    width='24'
                    height='24'
                    fill='yellow'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1'
                    style={{ width: '0.75rem', height: '0.75rem' }}
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z'></path>
                  </svg>
                  <div>5</div>
                </CardSpan> */}
              </CardSpanGroup>
            </CardOverlay>
          </Link>
        </Card>
      ))}
    </AnimeListGroup>
  )
}
