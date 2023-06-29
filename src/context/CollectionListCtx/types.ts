import { Dispatch } from 'react'
import { TCollections, TMedia } from '../AnimeDetailCtx/types'

export type TState = {
  thisCollection: string
  collections: TCollections[]
  newCollection: {
    name: string
    animes: TMedia[]
  }
  isUnique: boolean
  collectionAdded: boolean
  collectionRemoved: boolean
  showModalAddCollection: boolean
  showModalRemoveCollection: boolean
}

export type TAction =
  | {
      type: 'SET_COLLECTIONS'
      collections: TState['collections']
    }
  | {
      type: 'SET_NEW_COLLECTION'
      newCollection: TState['newCollection']
    }
  | {
      type: 'SET_IS_UNIQUE'
      isUnique: TState['isUnique']
    }
  | {
      type: 'SET_THIS_COLLECTION'
      thisCollection: TState['thisCollection']
    }
  | {
      type: 'SET_COLLECTION_ADDED'
      collectionAdded: TState['collectionAdded']
    }
  | {
      type: 'SET_COLLECTION_REMOVED'
      collectionRemoved: TState['collectionRemoved']
    }
  | {
      type: 'SET_SHOW_MODAL_ADD_COLLECTION'
      showModalAddCollection: TState['showModalAddCollection']
    }
  | {
      type: 'SET_SHOW_MODAL_REMOVE_COLLECTION'
      showModalRemoveCollection: TState['showModalRemoveCollection']
    }

export type TDefaultValue = {
  state: TState
  dispatch: Dispatch<TAction>
  setCollections: (payload: TState['collections']) => void
  setNewCollection: (payload: TState['newCollection']) => void
  setIsUnique: (payload: TState['isUnique']) => void
  setThisCollection: (payload: TState['thisCollection']) => void
  setCollectionAdded: (payload: TState['collectionAdded']) => void
  setCollectionRemoved: (payload: TState['collectionRemoved']) => void
  setShowModalAddCollection: (payload: TState['showModalAddCollection']) => void
  setShowModalRemoveCollection: (
    payload: TState['showModalRemoveCollection']
  ) => void
}
