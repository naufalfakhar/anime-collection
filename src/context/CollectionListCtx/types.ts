import { Dispatch } from 'react'
import { IAnime, ICollection } from '@/types'

export type TState = {
  thisCollection: string
  collections: ICollection[]
  newCollection: {
    name: string
    animes: IAnime[]
  }
  newName: string
  isUnique: boolean
  collectionAdded: boolean
  collectionEdited: boolean
  collectionRemoved: boolean
  showModalAddCollection: boolean
  showModalEditCollection: boolean
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
      type: 'SET_NEW_NAME'
      newName: TState['newName']
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
      type: 'SET_COLLECTION_EDITED'
      collectionEdited: TState['collectionEdited']
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
      type: 'SET_SHOW_MODAL_EDIT_COLLECTION'
      showModalEditCollection: TState['showModalEditCollection']
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
  setNewName: (payload: TState['newName']) => void
  setIsUnique: (payload: TState['isUnique']) => void
  setThisCollection: (payload: TState['thisCollection']) => void
  setCollectionAdded: (payload: TState['collectionAdded']) => void
  setCollectionEdited: (payload: TState['collectionEdited']) => void
  setCollectionRemoved: (payload: TState['collectionRemoved']) => void
  setShowModalAddCollection: (payload: TState['showModalAddCollection']) => void
  setShowModalEditCollection: (
    payload: TState['showModalEditCollection']
  ) => void
  setShowModalRemoveCollection: (
    payload: TState['showModalRemoveCollection']
  ) => void
}
