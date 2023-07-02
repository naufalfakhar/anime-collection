import { useAnimeListCtx } from '@/context/AnimeListCtx'
import { useQuery } from '@apollo/client'
import { GET_ANIME } from '../queries'

export const useGetAnimeListModal = () => {
  const {
    state: { pageInfoModal, skipModal },
  } = useAnimeListCtx()

  return useQuery(GET_ANIME, {
    variables: {
      page: pageInfoModal.currentPage,
      perPage: pageInfoModal.perPage,
    },
    skip: skipModal,
  })
}
