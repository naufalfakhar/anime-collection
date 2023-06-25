import { produce } from 'immer'
import { TAction, TState } from './types'

export const reducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case 'SET_PAGINATION':
      return produce(state, (draft) => {
        draft.pageInfo = action.pagination
      })

    case 'SET_MEDIA':
      return produce(state, (draft) => {
        draft.media = action.media
      })

    case 'SET_SKIP':
      return produce(state, (draft) => {
        draft.skip = action.skip
      })

    default:
      return state
  }
}
