import { IAnime, ICollection, IPageInfo } from '@/types'
import { Dispatch } from 'react'

export type TState = {
  pageInfo: IPageInfo
  pageInfoModal: IPageInfo
  collections: ICollection[]
  newCollection: ICollection
  animeList: IAnime[]
  animeListModal: IAnime[]
  selectedAnime: IAnime[]
  selectedAnimeName: string[]
  selectedCollection: string[]
  selectedCollectionName: string[]
  isUnique: boolean
  collectionAdded: boolean
  collectionUpdated: boolean
  skip: boolean
  skipModal: boolean
  showModalBulkAdd: boolean
  showModalAddToCollection: boolean
  showModalCreateCollection: boolean
}

export type TAction =
  | {
      type: 'SET_PAGE_INFO'
      pageInfo: TState['pageInfo']
    }
  | {
      type: 'SET_PAGE_INFO_MODAL'
      pageInfoModal: TState['pageInfoModal']
    }
  | { type: 'SET_COLLECTIONS'; collections: TState['collections'] }
  | { type: 'SET_NEW_COLLECTION'; newCollection: TState['newCollection'] }
  | { type: 'SET_ANIME_LIST'; animeList: TState['animeList'] }
  | { type: 'SET_ANIME_LIST_MODAL'; animeListModal: TState['animeListModal'] }
  | { type: 'SET_SELECTED_ANIME'; selectedAnime: TState['selectedAnime'] }
  | {
      type: 'SET_SELECTED_ANIME_NAME'
      selectedAnimeName: TState['selectedAnimeName']
    }
  | {
      type: 'SET_SELECTED_COLLECTION'
      selectedCollection: TState['selectedCollection']
    }
  | {
      type: 'SET_SELECTED_COLLECTION_NAME'
      selectedCollectionName: TState['selectedCollectionName']
    }
  | { type: 'SET_IS_UNIQUE'; isUnique: TState['isUnique'] }
  | {
      type: 'SET_COLLECTION_ADDED'
      collectionAdded: TState['collectionAdded']
    }
  | {
      type: 'SET_COLLECTION_UPDATED'
      collectionUpdated: TState['collectionUpdated']
    }
  | { type: 'SET_SKIP'; skip: TState['skip'] }
  | { type: 'SET_SKIP_MODAL'; skipModal: TState['skipModal'] }
  | {
      type: 'SET_SHOW_MODAL_BULK_ADD'
      showModalBulkAdd: TState['showModalBulkAdd']
    }
  | {
      type: 'SET_SHOW_MODAL_ADD_TO_COLLECTION'
      showModalAddToCollection: TState['showModalAddToCollection']
    }
  | {
      type: 'SET_SHOW_MODAL_CREATE_COLLECTION'
      showModalCreateCollection: TState['showModalCreateCollection']
    }

export type TDefaultValue = {
  state: TState
  dispatch: Dispatch<TAction>
  setPageInfo: (payload: TState['pageInfo']) => void
  setPageInfoModal: (payload: TState['pageInfoModal']) => void
  setCollections: (payload: TState['collections']) => void
  setNewCollection: (payload: TState['newCollection']) => void
  setAnimeList: (payload: TState['animeList']) => void
  setAnimeListModal: (payload: TState['animeListModal']) => void
  setSelectedAnime: (payload: TState['selectedAnime']) => void
  setSelectedAnimeName: (payload: TState['selectedAnimeName']) => void
  setSelectedCollection: (payload: TState['selectedCollection']) => void
  setSelectedCollectionName: (payload: TState['selectedCollectionName']) => void
  setIsUnique: (payload: TState['isUnique']) => void
  setCollectionAdded: (payload: TState['collectionAdded']) => void
  setCollectionUpdated: (payload: TState['collectionUpdated']) => void
  setSkip: (payload: TState['skip']) => void
  setSkipModal: (payload: TState['skipModal']) => void
  setShowModalBulkAdd: (payload: TState['showModalBulkAdd']) => void
  setShowModalAddToCollection: (
    payload: TState['showModalAddToCollection']
  ) => void
  setShowModalCreateCollection: (
    payload: TState['showModalCreateCollection']
  ) => void
}
