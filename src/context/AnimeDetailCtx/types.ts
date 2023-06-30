import { IAnime, ICollection } from '@/types'
import { Dispatch } from 'react'

export type TState = {
  id: number
  Media: IAnime
  skip: boolean
  collections: ICollection[]
  newCollection: {
    name: string
    animes: IAnime[]
  }
  prevSelectedCollection: string[]
  selectedCollection: string[]
  removedCollection: string[]
  isUnique: boolean
  collectionsAdded: boolean
  collectionsUpdated: boolean
  showModalAddCollection: boolean
  showModalNewCollection: boolean
  showModalCollectionInfo: boolean
}

export type TAction =
  | { type: 'SET_ID'; id: TState['id'] }
  | { type: 'SET_MEDIA'; Media: TState['Media'] }
  | { type: 'SET_SKIP'; skip: TState['skip'] }
  | {
      type: 'SET_COLLECTIONS'
      collections: TState['collections']
    }
  | {
      type: 'SET_NEW_COLLECTION'
      newCollection: TState['newCollection']
    }
  | {
      type: 'SET_PREV_SELECTED_COLLECTION'
      prevSelectedCollection: TState['prevSelectedCollection']
    }
  | {
      type: 'SET_SELECTED_COLLECTION'
      selectedCollection: TState['selectedCollection']
    }
  | {
      type: 'SET_REMOVED_COLLECTION'
      removedCollection: TState['removedCollection']
    }
  | {
      type: 'SET_IS_UNIQUE'
      isUnique: TState['isUnique']
    }
  | {
      type: 'SET_COLLECTIONS_ADDED'
      collectionsAdded: TState['collectionsAdded']
    }
  | {
      type: 'SET_COLLECTIONS_UPDATED'
      collectionsUpdated: TState['collectionsUpdated']
    }
  | {
      type: 'SET_SHOW_MODAL_ADD_COLLECTION'
      showModalAddCollection: TState['showModalAddCollection']
    }
  | {
      type: 'SET_SHOW_MODAL_NEW_COLLECTION'
      showModalNewCollection: TState['showModalNewCollection']
    }
  | {
      type: 'SET_SHOW_MODAL_COLLECTION_INFO'
      showModalCollectionInfo: TState['showModalCollectionInfo']
    }

export type TDefaultValue = {
  state: TState
  dispatch: Dispatch<TAction>
  setId: (payload: TState['id']) => void
  setMedia: (payload: TState['Media']) => void
  setSkip: (payload: TState['skip']) => void
  setCollections: (payload: TState['collections']) => void
  setNewCollection: (payload: TState['newCollection']) => void
  setPrevSelectedCollection: (payload: TState['selectedCollection']) => void
  setSelectedCollection: (payload: TState['selectedCollection']) => void
  setRemovedCollection: (payload: TState['removedCollection']) => void
  setIsUnique: (payload: TState['isUnique']) => void
  setCollectionsAdded: (payload: TState['collectionsAdded']) => void
  setCollectionsUpdated: (payload: TState['collectionsUpdated']) => void
  setShowModalAddCollection: (payload: TState['showModalAddCollection']) => void
  setShowModalNewCollection: (payload: TState['showModalNewCollection']) => void
  setShowModalCollectionInfo: (
    payload: TState['showModalCollectionInfo']
  ) => void
}
