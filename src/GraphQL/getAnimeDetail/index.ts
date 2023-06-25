import { useQuery } from '@apollo/client'
import { GET_ANIME_DETAIL } from '../queries'
import { useAnimeDetailCtx } from '@/context/AnimeDetailCtx'

export const useGetAnimeDetail = (id: number) => {
  const {
    state: { skip },
    setSkip,
  } = useAnimeDetailCtx()

  if (id !== 0) setSkip(false)

  return useQuery(GET_ANIME_DETAIL, {
    variables: { id: id },
    skip: skip,
  })
}
