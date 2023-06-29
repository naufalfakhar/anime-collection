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
  isUnique: true,
  collectionAdded: false,
  collectionRemoved: false,
  showModalAddCollection: false,
  showModalRemoveCollection: false,
}

const CollectionDetailCtx = React.createContext<TDefaultValue>({
  state: initialState,
  dispatch: () => undefined,
  setCollections: () => undefined,
  setNewCollection: () => undefined,
  setIsUnique: () => undefined,
  setThisCollection: () => undefined,
  setCollectionAdded: () => undefined,
  setCollectionRemoved: () => undefined,
  setShowModalAddCollection: () => undefined,
  setShowModalRemoveCollection: () => undefined,
})

export const useCollectionDetailCtx = () =>
  React.useContext(CollectionDetailCtx)

export const CollectionDetailCtxProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const val = actions(state, dispatch)

  return (
    <CollectionDetailCtx.Provider value={val}>
      {children}
    </CollectionDetailCtx.Provider>
  )
}
