import * as React from 'react'
import { TDefaultValue, TState } from './types'
import { reducer } from './reducer'
import { actions } from './actions'

const initialState: TState = {
  name: null,
  isLoading: true,
  selectedCollection: {
    name: '',
    animes: [],
  },
  thisCollection: '',
  thisAnime: '',
  newName: '',
  collections: [],
  newCollection: {
    name: '',
    animes: [],
  },
  isUnique: true,
  collectionEdited: false,
  collectionRemoved: false,
  showModalEditCollection: false,
  showModalRemoveAnime: false,
}

const CollectionDetailCtx = React.createContext<TDefaultValue>({
  state: initialState,
  dispatch: () => undefined,
  setName: () => undefined,
  setIsLoading: () => undefined,
  setSelectedCollection: () => undefined,
  setCollections: () => undefined,
  setNewCollection: () => undefined,
  setNewName: () => undefined,
  setIsUnique: () => undefined,
  setThisCollection: () => undefined,
  setThisAnime: () => undefined,
  setCollectionEdited: () => undefined,
  setCollectionRemoved: () => undefined,
  setShowModalEditCollection: () => undefined,
  setShowModalRemoveAnime: () => undefined,
})

export const useCollectionDetailCtx = () =>
  React.useContext(CollectionDetailCtx)

export const CollectionDetailCtxProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = actions(state, dispatch)

  return (
    <CollectionDetailCtx.Provider value={value}>
      {children}
    </CollectionDetailCtx.Provider>
  )
}
