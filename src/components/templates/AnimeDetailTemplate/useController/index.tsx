import * as React from 'react'
import { useAnimeDetailCtx } from '@/context/AnimeDetailCtx'
import { useGetAnimeDetail } from '@/GraphQL/getAnimeDetail'

export const useController = () => {
  const {
    state: { id },
    setMedia,
  } = useAnimeDetailCtx()

  const { loading, error, data, refetch } = useGetAnimeDetail(id)

  React.useEffect(() => {
    if (id !== 0) refetch()
    if (data) {
      setMedia(data.Media)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return {
    data,
    loading,
    error,
  }
}
