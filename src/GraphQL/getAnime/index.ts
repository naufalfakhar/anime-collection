import { useAnimeListCtx } from '@/context/AnimeListCtx'
import { useQuery } from '@apollo/client'
import { GET_ANIME } from '../queries'

export const useGetAnime = () => {
  const {
    state: { skipModal },
  } = useAnimeListCtx()

  return useQuery(GET_ANIME, {
    skip: skipModal,
  })
}
