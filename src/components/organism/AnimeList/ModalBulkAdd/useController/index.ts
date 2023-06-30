import * as React from 'react'
import { getLocalStorage, postCollection } from '@/utils'
import { useAnimeListCtx } from '@/context/AnimeListCtx'
import { ICollection } from '@/types'

export const useController = () => {
  const {
    state: {
      newCollection,
      showModalBulkAdd: isOpen,
      mediaModal,
      selectedAnime,
      selectedAnimeName,
      isUnique,
      collections,
      collectionsAdded,
    },
    setCollections,
    setCollectionsAdded,
    setIsUnique,
    setNewCollection,
    setShowModalBulkAdd,
    setSelectedAnime,
    setSelectedAnimeName,
  } = useAnimeListCtx()

  const currentCollectionList = getLocalStorage('collection')

  const handleClose = () => {
    setShowModalBulkAdd(false)
  }

  const handleCheckAnime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const checked = e.target.checked

    if (checked) {
      setSelectedAnimeName([...selectedAnimeName, name])
    } else {
      setSelectedAnimeName(selectedAnimeName.filter((item) => item !== name))
    }
  }

  const checkIfValueIsUnique = (value: string) => {
    const existingValues = currentCollectionList.map(
      (item: ICollection) => item.name
    )
    return !existingValues.includes(value)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (/^[a-zA-Z0-9 ]*$/.test(value)) {
      setNewCollection({
        ...newCollection,
        name: value,
        animes: selectedAnime,
      })
    }
    if (currentCollectionList) {
      const isValueUnique = checkIfValueIsUnique(value)
      setIsUnique(isValueUnique)
    }
  }

  const handleCreate = () => {
    if (
      isUnique &&
      newCollection.name.length <= 16 &&
      newCollection.name !== ''
    ) {
      if (currentCollectionList) {
        setCollections([...currentCollectionList, newCollection])
      } else {
        setCollections([...collections, newCollection])
      }
      setCollectionsAdded(true)
      handleClose()
    } else {
      alert(
        'Title is empty or not unique or have more than 16 character. Cannot perform create action.'
      )
    }
  }

  React.useEffect(() => {
    if (collections.length > 0 && collectionsAdded) {
      postCollection(collections)
      setCollectionsAdded(false)
      setSelectedAnimeName([])
      setNewCollection({
        name: '',
        animes: [],
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionsAdded])

  React.useEffect(() => {
    setSelectedAnime(
      mediaModal.filter((item) => selectedAnimeName.includes(item.title.romaji))
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAnimeName])

  return {
    newCollection,
    selectedAnime,
    mediaModal,
    currentCollectionList,
    selectedAnimeName,
    isOpen,
    handleChange,
    handleCreate,
    setNewCollection,
    handleClose,
    handleCheckAnime,
  }
}
