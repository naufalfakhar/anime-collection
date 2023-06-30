import { IAnime, ICollection } from '@/types'
import { Dispatch } from 'react'

export type TState = {
  name: string | null
  isLoading: boolean
  selectedCollection: ICollection
  thisCollection: string
  thisAnime: string
  newName: string
  collections: ICollection[]
  newCollection: {
    name: string
    animes: IAnime[]
  }
  isUnique: boolean
  collectionRemoved: boolean
  collectionEdited: boolean
  showModalEditCollection: boolean
  showModalRemoveAnime: boolean
}

export type TAction =
  | {
      type: 'SET_NAME'
      name: TState['name']
    }
  | {
      type: 'SET_IS_LOADING'
      isLoading: TState['isLoading']
    }
  | {
      type: 'SET_SELECTED_COLLECTION'
      selectedCollection: TState['selectedCollection']
    }
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
      type: 'SET_THIS_ANIME'
      thisAnime: TState['thisAnime']
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
      type: 'SET_SHOW_MODAL_EDIT_COLLECTION'
      showModalEditCollection: TState['showModalEditCollection']
    }
  | {
      type: 'SET_SHOW_MODAL_REMOVE_ANIME'
      showModalRemoveAnime: TState['showModalRemoveAnime']
    }

export type TDefaultValue = {
  state: TState
  dispatch: Dispatch<TAction>
  setName: (payload: TState['name']) => void
  setIsLoading: (payload: TState['isLoading']) => void
  setSelectedCollection: (payload: TState['selectedCollection']) => void
  setCollections: (payload: TState['collections']) => void
  setNewCollection: (payload: TState['newCollection']) => void
  setNewName: (payload: TState['newName']) => void
  setIsUnique: (payload: TState['isUnique']) => void
  setThisCollection: (payload: TState['thisCollection']) => void
  setThisAnime: (payload: TState['thisAnime']) => void
  setCollectionEdited: (payload: TState['collectionEdited']) => void
  setCollectionRemoved: (payload: TState['collectionRemoved']) => void
  setShowModalEditCollection: (
    payload: TState['showModalEditCollection']
  ) => void
  setShowModalRemoveAnime: (payload: TState['showModalRemoveAnime']) => void
}
