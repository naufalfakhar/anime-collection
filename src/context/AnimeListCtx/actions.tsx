import { Dispatch } from 'react'
import { TAction, TDefaultValue, TState } from './types'

export const actions = (
  state: TState,
  dispatch: Dispatch<TAction>
): TDefaultValue => ({
  state,
  dispatch,

  setPageInfo: (pageInfo: TState['pageInfo']) => {
    dispatch({ type: 'SET_PAGE_INFO', pageInfo })
  },

  setPageInfoModal: (pageInfoModal: TState['pageInfoModal']) => {
    dispatch({ type: 'SET_PAGE_INFO_MODAL', pageInfoModal })
  },

  setCollections: (collections: TState['collections']) => {
    dispatch({ type: 'SET_COLLECTIONS', collections })
  },

  setNewCollection: (newCollection: TState['newCollection']) => {
    dispatch({ type: 'SET_NEW_COLLECTION', newCollection })
  },

  setAnimeList: (animeList: TState['animeList']) => {
    dispatch({ type: 'SET_ANIME_LIST', animeList })
  },

  setAnimeListModal: (animeListModal: TState['animeListModal']) => {
    dispatch({ type: 'SET_ANIME_LIST_MODAL', animeListModal })
  },

  setSelectedAnime: (selectedAnime: TState['selectedAnime']) => {
    dispatch({ type: 'SET_SELECTED_ANIME', selectedAnime })
  },

  setSelectedAnimeName: (selectedAnimeName: TState['selectedAnimeName']) => {
    dispatch({ type: 'SET_SELECTED_ANIME_NAME', selectedAnimeName })
  },

  setSelectedCollection: (selectedCollection: TState['selectedCollection']) => {
    dispatch({ type: 'SET_SELECTED_COLLECTION', selectedCollection })
  },

  setSelectedCollectionName: (
    selectedCollectionName: TState['selectedCollectionName']
  ) => {
    dispatch({ type: 'SET_SELECTED_COLLECTION_NAME', selectedCollectionName })
  },

  setIsUnique: (isUnique: TState['isUnique']) => {
    dispatch({ type: 'SET_IS_UNIQUE', isUnique })
  },

  setCollectionAdded: (collectionAdded: TState['collectionAdded']) => {
    dispatch({ type: 'SET_COLLECTION_ADDED', collectionAdded })
  },

  setCollectionUpdated: (collectionUpdated: TState['collectionUpdated']) => {
    dispatch({ type: 'SET_COLLECTION_UPDATED', collectionUpdated })
  },

  setSkip: (skip: TState['skip']) => {
    dispatch({ type: 'SET_SKIP', skip })
  },

  setSkipModal: (skipModal: TState['skipModal']) => {
    dispatch({ type: 'SET_SKIP_MODAL', skipModal })
  },

  setShowModalBulkAdd: (showModalBulkAdd: TState['showModalBulkAdd']) => {
    dispatch({ type: 'SET_SHOW_MODAL_BULK_ADD', showModalBulkAdd })
  },

  setShowModalAddToCollection: (
    showModalAddToCollection: TState['showModalAddToCollection']
  ) => {
    dispatch({
      type: 'SET_SHOW_MODAL_ADD_TO_COLLECTION',
      showModalAddToCollection,
    })
  },

  setShowModalCreateCollection: (
    showModalCreateCollection: TState['showModalCreateCollection']
  ) => {
    dispatch({
      type: 'SET_SHOW_MODAL_CREATE_COLLECTION',
      showModalCreateCollection,
    })
  },
})
