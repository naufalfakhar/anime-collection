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
}

const AnimeDetailCtx = React.createContext<TDefaultValue>({
  state: initialState,
  dispatch: () => undefined,
  setId: () => undefined,
  setMedia: () => undefined,
  setSkip: () => undefined,
})

export const useAnimeDetailCtx = () => React.useContext(AnimeDetailCtx)

export const AnimeDetailCtxProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const memoized = React.useMemo(
    () => actions(state, dispatch),
    [state, dispatch]
  )

  return (
    <AnimeDetailCtx.Provider value={memoized}>
      {children}
    </AnimeDetailCtx.Provider>
  )
}