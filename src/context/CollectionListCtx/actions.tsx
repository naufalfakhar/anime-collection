import { Dispatch } from 'react'
import { TAction, TDefaultValue, TState } from './types'

export const actions = (
  state: TState,
  dispatch: Dispatch<TAction>
): TDefaultValue => ({
  state,
  dispatch,

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

  setCollectionAdded: (collectionAdded: TState['collectionAdded']) => {
    dispatch({
      type: 'SET_COLLECTION_ADDED',
      collectionAdded,
    })
  },

  setCollectionRemoved: (collectionRemoved: TState['collectionRemoved']) => {
    dispatch({
      type: 'SET_COLLECTION_REMOVED',
      collectionRemoved,
    })
  },

  setShowModalRemoveCollection: (
    showModalRemoveCollection: TState['showModalRemoveCollection']
  ) => {
    dispatch({
      type: 'SET_SHOW_MODAL_REMOVE_COLLECTION',
      showModalRemoveCollection,
    })
  },

  setShowModalAddCollection: (
    showModalAddCollection: TState['showModalAddCollection']
  ) => {
    dispatch({
      type: 'SET_SHOW_MODAL_ADD_COLLECTION',
      showModalAddCollection,
    })
  },
})
