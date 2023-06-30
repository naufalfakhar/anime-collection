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

  setSelectedAnime: (selectedAnime: TState['selectedAnime']) => {
    dispatch({ type: 'SET_SELECTED_ANIME', selectedAnime })
  },

  setSelectedAnimeName: (selectedAnimeName: TState['selectedAnimeName']) => {
    dispatch({ type: 'SET_SELECTED_ANIME_NAME', selectedAnimeName })
  },

  setIsUnique: (isUnique: TState['isUnique']) => {
    dispatch({ type: 'SET_IS_UNIQUE', isUnique })
  },

  setCollections: (collections: TState['collections']) => {
    dispatch({ type: 'SET_COLLECTIONS', collections })
  },

  setCollectionsAdded: (collectionsAdded: TState['collectionsAdded']) => {
    dispatch({ type: 'SET_COLLECTIONS_ADDED', collectionsAdded })
  },
  setNewCollection: (newCollection: TState['newCollection']) => {
    dispatch({ type: 'SET_NEW_COLLECTION', newCollection })
  },

  setMedia: (media: TState['media']) => {
    dispatch({ type: 'SET_MEDIA', media })
  },

  setSkip: (skip: TState['skip']) => {
    dispatch({ type: 'SET_SKIP', skip })
  },

  setMediaModal: (mediaModal: TState['mediaModal']) => {
    dispatch({ type: 'SET_MEDIA_MODAL', mediaModal })
  },

  setSkipModal: (skipModal: TState['skipModal']) => {
    dispatch({ type: 'SET_SKIP_MODAL', skipModal })
  },

  setShowModalBulkAdd: (showModalBulkAdd: TState['showModalBulkAdd']) => {
    dispatch({ type: 'SET_SHOW_MODAL_BULK_ADD', showModalBulkAdd })
  },
})
