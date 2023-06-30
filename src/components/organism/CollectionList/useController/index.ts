import * as React from 'react'
import { getLocalStorage, removeCollection } from '@/utils'
import { useCollectionListCtx } from '@/context/CollectionListCtx'

export const useController = () => {
  const {
    state: { collectionRemoved, thisCollection },
    setCollectionRemoved,
    setThisCollection,
    setShowModalAddCollection,
    setShowModalEditCollection,
    setShowModalRemoveCollection,
  } = useCollectionListCtx()

  const currentCollectionList = getLocalStorage('collection')

  const handleOpenModalRemoveCollection = (name: string) => {
    setThisCollection(name)
    setShowModalRemoveCollection(true)
  }

  const handleOpenModalEditCollection = (name: string) => {
    setThisCollection(name)
    setShowModalEditCollection(true)
  }

  const handleOpenModalAddCollection = () => {
    setShowModalAddCollection(true)
  }

  React.useEffect(() => {
    if (collectionRemoved) {
      removeCollection(thisCollection)
      setCollectionRemoved(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionRemoved])

  return {
    currentCollectionList,
    handleOpenModalAddCollection,
    handleOpenModalEditCollection,
    handleOpenModalRemoveCollection,
  }
}
