import { produce } from 'immer'
import { TAction, TState } from './types'

export const reducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case 'SET_COLLECTIONS':
      return produce(state, (draft) => {
        draft.collections = action.collections
      })

    case 'SET_NEW_COLLECTION':
      return produce(state, (draft) => {
        draft.newCollection = action.newCollection
      })

    case 'SET_IS_UNIQUE':
      return produce(state, (draft) => {
        draft.isUnique = action.isUnique
      })

    case 'SET_THIS_COLLECTION':
      return produce(state, (draft) => {
        draft.thisCollection = action.thisCollection
      })

    case 'SET_COLLECTION_ADDED':
      return produce(state, (draft) => {
        draft.collectionAdded = action.collectionAdded
      })

    case 'SET_COLLECTION_REMOVED':
      return produce(state, (draft) => {
        draft.collectionRemoved = action.collectionRemoved
      })

    case 'SET_SHOW_MODAL_ADD_COLLECTION':
      return produce(state, (draft) => {
        draft.showModalAddCollection = action.showModalAddCollection
      })

    case 'SET_SHOW_MODAL_REMOVE_COLLECTION':
      return produce(state, (draft) => {
        draft.showModalRemoveCollection = action.showModalRemoveCollection
      })

    default:
      return state
  }
}
