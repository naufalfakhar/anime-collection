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

    case 'SET_COLLECTIONS':
      return produce(state, (draft) => {
        draft.collections = action.collections
      })

    case 'SET_NEW_COLLECTION':
      return produce(state, (draft) => {
        draft.newCollection = action.newCollection
      })

    case 'SET_PREV_SELECTED_COLLECTION':
      return produce(state, (draft) => {
        draft.prevSelectedCollection = action.prevSelectedCollection
      })

    case 'SET_SELECTED_COLLECTION':
      return produce(state, (draft) => {
        draft.selectedCollection = action.selectedCollection
      })

    case 'SET_IS_UNIQUE':
      return produce(state, (draft) => {
        draft.isUnique = action.isUnique
      })

    case 'SET_COLLECTIONS_UPDATED':
      return produce(state, (draft) => {
        draft.collectionsUpdated = action.collectionsUpdated
      })

    case 'SET_SHOW_MODAL_ADD_COLLECTION':
      return produce(state, (draft) => {
        draft.showModalAddCollection = action.showModalAddCollection
      })

    case 'SET_SHOW_MODAL_NEW_COLLECTION':
      return produce(state, (draft) => {
        draft.showModalNewCollection = action.showModalNewCollection
      })

    case 'SET_SHOW_MODAL_COLLECTION_INFO':
      return produce(state, (draft) => {
        draft.showModalCollectionInfo = action.showModalCollectionInfo
      })

    default:
      return state
  }
}
