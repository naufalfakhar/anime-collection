import { produce } from 'immer'
import { TAction, TState } from './types'

export const reducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case 'SET_PAGINATION':
      return produce(state, (draft) => {
        draft.pageInfo = action.pagination
      })

    case 'SET_SELECTED_ANIME':
      return produce(state, (draft) => {
        draft.selectedAnime = action.selectedAnime
      })

    case 'SET_SELECTED_ANIME_NAME':
      return produce(state, (draft) => {
        draft.selectedAnimeName = action.selectedAnimeName
      })

    case 'SET_NEW_COLLECTION':
      return produce(state, (draft) => {
        draft.newCollection = action.newCollection
      })

    case 'SET_IS_UNIQUE':
      return produce(state, (draft) => {
        draft.isUnique = action.isUnique
      })

    case 'SET_COLLECTIONS':
      return produce(state, (draft) => {
        draft.collections = action.collections
      })

    case 'SET_COLLECTIONS_ADDED':
      return produce(state, (draft) => {
        draft.collectionsAdded = action.collectionsAdded
      })
    case 'SET_MEDIA':
      return produce(state, (draft) => {
        draft.media = action.media
      })

    case 'SET_SKIP':
      return produce(state, (draft) => {
        draft.skip = action.skip
      })

    case 'SET_MEDIA_MODAL':
      return produce(state, (draft) => {
        draft.mediaModal = action.mediaModal
      })

    case 'SET_SKIP_MODAL':
      return produce(state, (draft) => {
        draft.skipModal = action.skipModal
      })

    case 'SET_SHOW_MODAL_BULK_ADD':
      return produce(state, (draft) => {
        draft.showModalBulkAdd = action.showModalBulkAdd
      })

    default:
      return state
  }
}
