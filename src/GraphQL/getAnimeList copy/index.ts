import { useAnimeListCtx } from '@/context/AnimeListCtx'
import { useQuery } from '@apollo/client'
import * as React from 'react'
import { GET_ANIME } from '../queries'

export const useGetAnimeList = () => {
  const {
    state: { pageInfo, skip },
    setSkip,
  } = useAnimeListCtx()

  React.useEffect(() => {
    setSkip(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return useQuery(GET_ANIME, {
    variables: { page: pageInfo.currentPage, perPage: pageInfo.perPage },
    skip: skip,
  })
}
