import { Dispatch } from 'react'
import { TAction, TDefaultValue, TState } from './types'

export const actions = (
  state: TState,
  dispatch: Dispatch<TAction>
): TDefaultValue => ({
  state,
  dispatch,

  setPagination: (pagination: TState['pageInfo']) => {
    dispatch({ type: 'SET_PAGINATION', pagination })
  },

  setMedia: (media: TState['media']) => {
    dispatch({ type: 'SET_MEDIA', media })
  },

  setSkip: (skip: TState['skip']) => {
    dispatch({ type: 'SET_SKIP', skip })
  },
})
