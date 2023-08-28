import { produce } from 'immer'
import { TAction, TState } from './types'

export const reducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case 'SET_PAGE_INFO':
      return produce(state, (draft) => {
        draft.pageInfo = action.pageInfo
      })

    case 'SET_PAGE_INFO_MODAL':
      return produce(state, (draft) => {
        draft.pageInfoModal = action.pageInfoModal
      })

    case 'SET_COLLECTIONS':
      return produce(state, (draft) => {
        draft.collections = action.collections
      })

    case 'SET_NEW_COLLECTION':
      return produce(state, (draft) => {
        draft.newCollection = action.newCollection
      })

    case 'SET_ANIME_LIST':
      return produce(state, (draft) => {
        draft.animeList = action.animeList
      })

    case 'SET_ANIME_LIST_MODAL':
      return produce(state, (draft) => {
        draft.animeListModal = action.animeListModal
      })

    case 'SET_SELECTED_ANIME':
      return produce(state, (draft) => {
        draft.selectedAnime = action.selectedAnime
      })

    case 'SET_SELECTED_ANIME_NAME':
      return produce(state, (draft) => {
        draft.selectedAnimeName = action.selectedAnimeName
      })

    case 'SET_SELECTED_COLLECTION':
      return produce(state, (draft) => {
        draft.selectedCollection = action.selectedCollection
      })

    case 'SET_SELECTED_COLLECTION_NAME':
      return produce(state, (draft) => {
        draft.selectedCollectionName = action.selectedCollectionName
      })

    case 'SET_IS_UNIQUE':
      return produce(state, (draft) => {
        draft.isUnique = action.isUnique
      })

    case 'SET_COLLECTION_ADDED':
      return produce(state, (draft) => {
        draft.collectionAdded = action.collectionAdded
      })

    case 'SET_COLLECTION_UPDATED':
      return produce(state, (draft) => {
        draft.collectionUpdated = action.collectionUpdated
      })

    case 'SET_SKIP':
      return produce(state, (draft) => {
        draft.skip = action.skip
      })

    case 'SET_SKIP_MODAL':
      return produce(state, (draft) => {
        draft.skipModal = action.skipModal
      })

    case 'SET_SHOW_MODAL_BULK_ADD':
      return produce(state, (draft) => {
        draft.showModalBulkAdd = action.showModalBulkAdd
      })

    case 'SET_SHOW_MODAL_ADD_TO_COLLECTION':
      return produce(state, (draft) => {
        draft.showModalAddToCollection = action.showModalAddToCollection
      })

    case 'SET_SHOW_MODAL_CREATE_COLLECTION':
      return produce(state, (draft) => {
        draft.showModalCreateCollection = action.showModalCreateCollection
      })

    default:
      return state
  }
}
