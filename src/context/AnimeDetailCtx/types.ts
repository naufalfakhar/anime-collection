import { Dispatch } from 'react'

export type TMedia = {
  id: number
  title: {
    romaji: string
    english: string
    native: string
  }
  coverImage: {
    extraLarge: string
    large: string
    medium: string
    color: string
  }
  bannerImage: string
  season: string
  seasonYear: number
  description: string
  episodes: number
  genres: string[]
  meanScore: number
}

export type TCollections = {
  name: string
  animes: TMedia[]
}

export type TState = {
  id: number
  Media: TMedia
  skip: boolean
  collections: TCollections[]
  newCollection: {
    name: string
    animes: TMedia[]
  }
  isUnique: boolean
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
      type: 'SET_IS_UNIQUE'
      isUnique: TState['isUnique']
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
  setIsUnique: (payload: TState['isUnique']) => void
  setCollectionsUpdated: (payload: TState['collectionsUpdated']) => void
  setShowModalAddCollection: (payload: TState['showModalAddCollection']) => void
  setShowModalNewCollection: (payload: TState['showModalNewCollection']) => void
  setShowModalCollectionInfo: (
    payload: TState['showModalCollectionInfo']
  ) => void
}
