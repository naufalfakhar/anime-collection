import { produce } from 'immer'
import { TAction, TState } from './types'

export const reducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case 'SET_NAME':
      return produce(state, (draft) => {
        draft.name = action.name
      })

    case 'SET_IS_LOADING':
      return produce(state, (draft) => {
        draft.isLoading = action.isLoading
      })

    case 'SET_SELECTED_COLLECTION':
      return produce(state, (draft) => {
        draft.selectedCollection = action.selectedCollection
      })

    case 'SET_COLLECTIONS':
      return produce(state, (draft) => {
        draft.collections = action.collections
      })

    case 'SET_NEW_COLLECTION':
      return produce(state, (draft) => {
        draft.newCollection = action.newCollection
      })

    case 'SET_NEW_NAME':
      return produce(state, (draft) => {
        draft.newName = action.newName
      })

    case 'SET_IS_UNIQUE':
      return produce(state, (draft) => {
        draft.isUnique = action.isUnique
      })

    case 'SET_THIS_COLLECTION':
      return produce(state, (draft) => {
        draft.thisCollection = action.thisCollection
      })

    case 'SET_THIS_ANIME':
      return produce(state, (draft) => {
        draft.thisAnime = action.thisAnime
      })

    case 'SET_COLLECTION_EDITED':
      return produce(state, (draft) => {
        draft.collectionEdited = action.collectionEdited
      })

    case 'SET_COLLECTION_REMOVED':
      return produce(state, (draft) => {
        draft.collectionRemoved = action.collectionRemoved
      })

    case 'SET_SHOW_MODAL_EDIT_COLLECTION':
      return produce(state, (draft) => {
        draft.showModalEditCollection = action.showModalEditCollection
      })

    case 'SET_SHOW_MODAL_REMOVE_ANIME':
      return produce(state, (draft) => {
        draft.showModalRemoveAnime = action.showModalRemoveAnime
      })

    default:
      return state
  }
}
