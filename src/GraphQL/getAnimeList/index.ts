import { useAnimeListCtx } from '@/context/AnimeListCtx'
import { useQuery } from '@apollo/client'
import { GET_ANIME } from '../queries'

export const useGetAnimeList = () => {
  const {
    state: { pageInfo, skip },
    setSkip,
  } = useAnimeListCtx()

  setSkip(false)

  return useQuery(GET_ANIME, {
    variables: { page: pageInfo.currentPage, perPage: pageInfo.perPage },
    skip: skip,
  })
}
