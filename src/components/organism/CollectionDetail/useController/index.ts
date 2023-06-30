import * as React from 'react'
import { useCollectionDetailCtx } from '@/context/CollectionDetailCtx'
import { getLocalStorage } from '@/utils'
import { ICollection } from '@/types'

export const useController = () => {
  const {
    state: { name, isLoading, selectedCollection },
    setName,
    setIsLoading,
    setSelectedCollection,
    setThisCollection,
    setShowModalEditCollection,
    setShowModalRemoveAnime,
    setThisAnime,
  } = useCollectionDetailCtx()

  const currentCollectionList = getLocalStorage('collection')

  React.useEffect(() => {
    if (name !== null) {
      setIsLoading(false)
      setSelectedCollection(
        currentCollectionList.find(
          (collection: ICollection) => collection.name === name
        )
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  const handleOpenModalEditCollection = (name: string) => {
    setThisCollection(name)
    setShowModalEditCollection(true)
  }

  const handleOpenModalRemoveAnime = (name: string) => {
    setThisAnime(name)
    setShowModalRemoveAnime(true)
  }

  return {
    name,
    selectedCollection,
    setName,
    isLoading,
    handleOpenModalEditCollection,
    handleOpenModalRemoveAnime,
  }
}
