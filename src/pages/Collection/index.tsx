import ModalCreateCollection from '@/components/organism/CollectionList/ModalCreateCollection'
import ModalEditCollection from '@/components/organism/CollectionList/ModalEditCollection'
import ModalRemoveCollection from '@/components/organism/CollectionList/ModalRemoveCollection'
import CollectionListTemplate from '@/components/templates/CollectionListTemplate'
import { CollectionListCtxProvider } from '@/context/CollectionListCtx'

export default function Collection() {
  return (
    <CollectionListCtxProvider>
      <CollectionListTemplate />
      <ModalCreateCollection />
      <ModalEditCollection />
      <ModalRemoveCollection />
    </CollectionListCtxProvider>
  )
}
