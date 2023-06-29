import { Dispatch } from 'react'
import { TAction, TDefaultValue, TState } from './types'

export const actions = (
  state: TState,
  dispatch: Dispatch<TAction>
): TDefaultValue => ({
  state,
  dispatch,

  setId: (id: TState['id']) => {
    dispatch({ type: 'SET_ID', id })
  },

  setMedia: (Media: TState['Media']) => {
    dispatch({ type: 'SET_MEDIA', Media })
  },

  setSkip: (skip: TState['skip']) => {
    dispatch({ type: 'SET_SKIP', skip })
  },

  setCollections: (collections: TState['collections']) => {
    dispatch({ type: 'SET_COLLECTIONS', collections })
  },

  setNewCollection: (newCollection: TState['newCollection']) => {
    dispatch({ type: 'SET_NEW_COLLECTION', newCollection })
  },

  setPrevSelectedCollection: (
    prevSelectedCollection: TState['prevSelectedCollection']
  ) => {
    dispatch({ type: 'SET_PREV_SELECTED_COLLECTION', prevSelectedCollection })
  },

  setSelectedCollection: (selectedCollection: TState['selectedCollection']) => {
    dispatch({ type: 'SET_SELECTED_COLLECTION', selectedCollection })
  },

  setRemovedCollection: (removedCollection: TState['removedCollection']) => {
    dispatch({ type: 'SET_REMOVED_COLLECTION', removedCollection })
  },

  setIsUnique: (isUnique: TState['isUnique']) => {
    dispatch({ type: 'SET_IS_UNIQUE', isUnique })
  },

  setCollectionsAdded: (collectionsAdded: TState['collectionsAdded']) => {
    dispatch({ type: 'SET_COLLECTIONS_ADDED', collectionsAdded })
  },

  setCollectionsUpdated: (collectionsUpdated: TState['collectionsUpdated']) => {
    dispatch({ type: 'SET_COLLECTIONS_UPDATED', collectionsUpdated })
  },

  setShowModalAddCollection: (
    showModalAddCollection: TState['showModalAddCollection']
  ) => {
    dispatch({ type: 'SET_SHOW_MODAL_ADD_COLLECTION', showModalAddCollection })
  },

  setShowModalNewCollection: (
    showModalNewCollection: TState['showModalNewCollection']
  ) => {
    dispatch({ type: 'SET_SHOW_MODAL_NEW_COLLECTION', showModalNewCollection })
  },

  setShowModalCollectionInfo: (
    showModalCollectionInfo: TState['showModalCollectionInfo']
  ) => {
    dispatch({
      type: 'SET_SHOW_MODAL_COLLECTION_INFO',
      showModalCollectionInfo,
    })
  },
})
