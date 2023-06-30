import { IAnime, ICollection, IPageInfo } from '@/types'
import { Dispatch } from 'react'

export type TState = {
  pageInfo: IPageInfo
  media: IAnime[]
  mediaModal: IAnime[]
  selectedAnime: IAnime[]
  selectedAnimeName: string[]
  newCollection: ICollection
  isUnique: boolean
  collections: ICollection[]
  collectionsAdded: boolean
  skip: boolean
  skipModal: boolean
  showModalBulkAdd: boolean
}

export type TAction =
  | {
      type: 'SET_PAGINATION'
      pagination: TState['pageInfo']
    }
  | { type: 'SET_SELECTED_ANIME'; selectedAnime: TState['selectedAnime'] }
  | {
      type: 'SET_SELECTED_ANIME_NAME'
      selectedAnimeName: TState['selectedAnimeName']
    }
  | { type: 'SET_NEW_COLLECTION'; newCollection: TState['newCollection'] }
  | { type: 'SET_IS_UNIQUE'; isUnique: TState['isUnique'] }
  | { type: 'SET_COLLECTIONS'; collections: TState['collections'] }
  | {
      type: 'SET_COLLECTIONS_ADDED'
      collectionsAdded: TState['collectionsAdded']
    }
  | { type: 'SET_MEDIA'; media: TState['media'] }
  | { type: 'SET_SKIP'; skip: TState['skip'] }
  | { type: 'SET_MEDIA_MODAL'; mediaModal: TState['mediaModal'] }
  | { type: 'SET_SKIP_MODAL'; skipModal: TState['skipModal'] }
  | {
      type: 'SET_SHOW_MODAL_BULK_ADD'
      showModalBulkAdd: TState['showModalBulkAdd']
    }

export type TDefaultValue = {
  state: TState
  dispatch: Dispatch<TAction>
  setPagination: (payload: TState['pageInfo']) => void
  setSelectedAnime: (payload: TState['selectedAnime']) => void
  setSelectedAnimeName: (payload: TState['selectedAnimeName']) => void
  setNewCollection: (payload: TState['newCollection']) => void
  setIsUnique: (payload: TState['isUnique']) => void
  setCollections: (payload: TState['collections']) => void
  setCollectionsAdded: (payload: TState['collectionsAdded']) => void
  setMedia: (payload: TState['media']) => void
  setSkip: (payload: TState['skip']) => void
  setMediaModal: (payload: TState['mediaModal']) => void
  setSkipModal: (payload: TState['skipModal']) => void
  setShowModalBulkAdd: (payload: TState['showModalBulkAdd']) => void
}
