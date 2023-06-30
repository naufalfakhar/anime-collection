import { Dispatch } from 'react'
import { TAction, TDefaultValue, TState } from './types'

export const actions = (
  state: TState,
  dispatch: Dispatch<TAction>
): TDefaultValue => ({
  state,
  dispatch,

  setName: (name: TState['name']) => {
    dispatch({
      type: 'SET_NAME',
      name,
    })
  },

  setIsLoading: (isLoading: TState['isLoading']) => {
    dispatch({
      type: 'SET_IS_LOADING',
      isLoading,
    })
  },

  setSelectedCollection: (selectedCollection: TState['selectedCollection']) => {
    dispatch({
      type: 'SET_SELECTED_COLLECTION',
      selectedCollection,
    })
  },

  setCollections: (collections: TState['collections']) => {
    dispatch({
      type: 'SET_COLLECTIONS',
      collections,
    })
  },

  setNewCollection: (newCollection: TState['newCollection']) => {
    dispatch({
      type: 'SET_NEW_COLLECTION',
      newCollection,
    })
  },

  setNewName: (newName: TState['newName']) => {
    dispatch({
      type: 'SET_NEW_NAME',
      newName,
    })
  },

  setIsUnique: (isUnique: TState['isUnique']) => {
    dispatch({
      type: 'SET_IS_UNIQUE',
      isUnique,
    })
  },

  setThisCollection: (thisCollection: TState['thisCollection']) => {
    dispatch({
      type: 'SET_THIS_COLLECTION',
      thisCollection,
    })
  },

  setThisAnime: (thisAnime: TState['thisAnime']) => {
    dispatch({
      type: 'SET_THIS_ANIME',
      thisAnime,
    })
  },

  setCollectionEdited: (collectionEdited: TState['collectionEdited']) => {
    dispatch({
      type: 'SET_COLLECTION_EDITED',
      collectionEdited,
    })
  },

  setCollectionRemoved: (collectionRemoved: TState['collectionRemoved']) => {
    dispatch({
      type: 'SET_COLLECTION_REMOVED',
      collectionRemoved,
    })
  },

  setShowModalRemoveAnime: (
    showModalRemoveAnime: TState['showModalRemoveAnime']
  ) => {
    dispatch({
      type: 'SET_SHOW_MODAL_REMOVE_ANIME',
      showModalRemoveAnime,
    })
  },

  setShowModalEditCollection: (
    showModalEditCollection: TState['showModalEditCollection']
  ) => {
    dispatch({
      type: 'SET_SHOW_MODAL_EDIT_COLLECTION',
      showModalEditCollection,
    })
  },
})
