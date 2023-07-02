import * as React from 'react'
import { useAnimeDetailCtx } from '@/context/AnimeDetailCtx'
import { useGetAnimeDetail } from '@/GraphQL/getAnimeDetail'

export const useController = () => {
  const {
    state: { id, currentAnime },
    setCurrentAnime,
    setId,
    setShowModalAddCollection,
    setShowModalCollectionInfo,
    setSelectedCollection,
    setRemovedCollection,
  } = useAnimeDetailCtx()

  const { loading, data, refetch } = useGetAnimeDetail(id)

  React.useEffect(() => {
    if (id !== 0) refetch()
    if (data) {
      setCurrentAnime(data.Media)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const handleOpenModalAddCollection = () => {
    setShowModalAddCollection(true)
    setSelectedCollection([])
    setRemovedCollection([])
  }

  const handleOpenModalCollectionInfo = () => {
    setShowModalCollectionInfo(true)
  }

  return {
    loading,
    currentAnime,
    setId,
    handleOpenModalAddCollection,
    handleOpenModalCollectionInfo,
  }
}
