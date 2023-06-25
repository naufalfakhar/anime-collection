import { Dispatch } from 'react'
import { TAction, TDefaultValue, TState } from './types'

export const actions = (
  state: TState,
  dispatch: Dispatch<TAction>
): TDefaultValue => ({
  state,
  dispatch,

  setId: (id: TState['id']) => {
    dispatch({ type: 'SET_ID', id })
  },

  setMedia: (Media: TState['Media']) => {
    dispatch({ type: 'SET_MEDIA', Media })
  },

  setSkip: (skip: TState['skip']) => {
    dispatch({ type: 'SET_SKIP', skip })
  },
})
