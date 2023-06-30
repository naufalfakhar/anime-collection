import * as React from 'react'
import { TDefaultValue, TState } from './types'
import { reducer } from './reducer'
import { actions } from './actions'

const initialState: TState = {
  collections: [],
  newCollection: {
    name: '',
    animes: [],
  },
  thisCollection: '',
  newName: '',
  isUnique: true,
  collectionAdded: false,
  collectionEdited: false,
  collectionRemoved: false,
  showModalAddCollection: false,
  showModalEditCollection: false,
  showModalRemoveCollection: false,
}

const CollectionListCtx = React.createContext<TDefaultValue>({
  state: initialState,
  dispatch: () => undefined,
  setCollections: () => undefined,
  setNewCollection: () => undefined,
  setNewName: () => undefined,
  setIsUnique: () => undefined,
  setThisCollection: () => undefined,
  setCollectionAdded: () => undefined,
  setCollectionEdited: () => undefined,
  setCollectionRemoved: () => undefined,
  setShowModalAddCollection: () => undefined,
  setShowModalEditCollection: () => undefined,
  setShowModalRemoveCollection: () => undefined,
})

export const useCollectionListCtx = () => React.useContext(CollectionListCtx)

export const CollectionListCtxProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const val = actions(state, dispatch)

  return (
    <CollectionListCtx.Provider value={val}>
      {children}
    </CollectionListCtx.Provider>
  )
}
