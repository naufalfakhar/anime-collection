import ModalAddCollection from '@/components/organism/CollectionList/ModalAddCollection'
import ModalRemoveCollection from '@/components/organism/CollectionList/ModalRemoveCollection'
import CollectionListTemplate from '@/components/templates/CollectionListTemplate'
import { CollectionListCtxProvider } from '@/context/CollectionListCtx'

export default function Collection() {
  return (
    <CollectionListCtxProvider>
      <CollectionListTemplate />
      <ModalAddCollection />
      <ModalRemoveCollection />
    </CollectionListCtxProvider>
  )
}
