import * as React from 'react'
import { getLocalStorage, removeCollection } from '@/utils'
import { useCollectionListCtx } from '@/context/CollectionListCtx'

export const useController = () => {
  const {
    state: {
      collectionRemoved,
      thisCollection,
      showModalRemoveCollection: isOpen,
    },
    setShowModalRemoveCollection,
    setCollectionRemoved,
  } = useCollectionListCtx()

  const currentCollectionList = getLocalStorage('collection')

  const handleClose = () => {
    setShowModalRemoveCollection(false)
  }

  const handleRemoveCollection = () => {
    setCollectionRemoved(true)
    handleClose()
  }

  React.useEffect(() => {
    if (collectionRemoved) {
      removeCollection(thisCollection)
      setCollectionRemoved(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionRemoved])

  return {
    thisCollection,
    isOpen,
    currentCollectionList,
    handleRemoveCollection,
    handleClose,
  }
}
