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
  skip: true,
}

const AnimeListCtx = React.createContext<TDefaultValue>({
  state: initialState,
  dispatch: () => undefined,
  setPagination: () => undefined,
  setMedia: () => undefined,
  setSkip: () => undefined,
})

export const useAnimeListCtx = () => React.useContext(AnimeListCtx)

export const AnimeListCtxProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const val = actions(state, dispatch)

  return <AnimeListCtx.Provider value={val}>{children}</AnimeListCtx.Provider>
}
