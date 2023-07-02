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
  pageInfoModal: {
    total: 0,
    currentPage: 1,
    lastPage: 1,
    hasNextPage: false,
    perPage: 10,
  },
  collections: [],
  newCollection: {
    name: '',
    animes: [],
  },
  animeList: [],
  animeListModal: [],
  selectedAnime: [],
  selectedAnimeName: [],
  selectedCollection: [],
  selectedCollectionName: [],
  isUnique: true,
  collectionAdded: false,
  collectionUpdated: false,
  skip: true,
  skipModal: true,
  showModalBulkAdd: false,
  showModalAddToCollection: false,
  showModalCreateCollection: false,
}

const AnimeListCtx = React.createContext<TDefaultValue>({
  state: initialState,
  dispatch: () => undefined,
  setPageInfo: () => undefined,
  setPageInfoModal: () => undefined,
  setCollections: () => undefined,
  setNewCollection: () => undefined,
  setAnimeList: () => undefined,
  setAnimeListModal: () => undefined,
  setSelectedAnime: () => undefined,
  setSelectedAnimeName: () => undefined,
  setSelectedCollection: () => undefined,
  setSelectedCollectionName: () => undefined,
  setIsUnique: () => undefined,
  setCollectionAdded: () => undefined,
  setCollectionUpdated: () => undefined,
  setSkip: () => undefined,
  setSkipModal: () => undefined,
  setShowModalBulkAdd: () => undefined,
  setShowModalAddToCollection: () => undefined,
  setShowModalCreateCollection: () => undefined,
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
