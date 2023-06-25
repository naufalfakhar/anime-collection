import { produce } from 'immer'
import { TAction, TState } from './types'

export const reducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case 'SET_ID':
      return produce(state, (draft) => {
        draft.id = action.id
      })

    case 'SET_MEDIA':
      return produce(state, (draft) => {
        draft.Media = action.Media
      })

    case 'SET_SKIP':
      return produce(state, (draft) => {
        draft.skip = action.skip
      })

    default:
      return state
  }
}
