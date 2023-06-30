import * as React from 'react'
import { TDefaultValue, TState } from './types'
import { reducer } from './reducer'
import { actions } from './actions'

const initialState: TState = {
  pageInfo: {
    total: 0,
    currentPage: 1,
    lastPage: 1,
    hasNextPage: false,
    perPage: 10,
  },
  media: [],
  mediaModal: [],
  selectedAnime: [],
  selectedAnimeName: [],
  newCollection: {
    name: '',
    animes: [],
  },
  collections: [],
  collectionsAdded: false,
  isUnique: true,
  skip: true,
  skipModal: true,
  showModalBulkAdd: false,
}

const AnimeListCtx = React.createContext<TDefaultValue>({
  state: initialState,
  dispatch: () => undefined,
  setPagination: () => undefined,
  setSelectedAnime: () => undefined,
  setSelectedAnimeName: () => undefined,
  setNewCollection: () => undefined,
  setCollections: () => undefined,
  setCollectionsAdded: () => undefined,
  setIsUnique: () => undefined,
  setMedia: () => undefined,
  setSkip: () => undefined,
  setMediaModal: () => undefined,
  setSkipModal: () => undefined,
  setShowModalBulkAdd: () => undefined,
})

export const useAnimeListCtx = () => React.useContext(AnimeListCtx)

export const AnimeListCtxProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = actions(state, dispatch)

  return <AnimeListCtx.Provider value={value}>{children}</AnimeListCtx.Provider>
}
