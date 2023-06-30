import * as React from 'react'
import { TDefaultValue, TState } from './types'
import { reducer } from './reducer'
import { actions } from './actions'

const initialState: TState = {
  id: 0,
  Media: {
    id: 0,
    title: {
      romaji: '',
      english: '',
      native: '',
    },
    coverImage: {
      extraLarge: '',
      large: '',
      medium: '',
      color: '',
    },
    bannerImage: '',
    season: '',
    seasonYear: 0,
    description: '',
    episodes: 0,
    genres: [],
    meanScore: 0,
  },
  skip: true,
  collections: [],
  newCollection: {
    name: '',
    animes: [],
  },
  prevSelectedCollection: [],
  selectedCollection: [],
  removedCollection: [],
  isUnique: true,
  collectionsAdded: false,
  collectionsUpdated: false,
  showModalAddCollection: false,
  showModalNewCollection: false,
  showModalCollectionInfo: false,
}

const AnimeDetailCtx = React.createContext<TDefaultValue>({
  state: initialState,
  dispatch: () => undefined,
  setId: () => undefined,
  setMedia: () => undefined,
  setSkip: () => undefined,
  setCollections: () => undefined,
  setNewCollection: () => undefined,
  setPrevSelectedCollection: () => undefined,
  setSelectedCollection: () => undefined,
  setRemovedCollection: () => undefined,
  setIsUnique: () => undefined,
  setCollectionsAdded: () => undefined,
  setCollectionsUpdated: () => undefined,
  setShowModalAddCollection: () => undefined,
  setShowModalNewCollection: () => undefined,
  setShowModalCollectionInfo: () => undefined,
})

export const useAnimeDetailCtx = () => React.useContext(AnimeDetailCtx)

export const AnimeDetailCtxProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = actions(state, dispatch)

  return (
    <AnimeDetailCtx.Provider value={value}>{children}</AnimeDetailCtx.Provider>
  )
}
