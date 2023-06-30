import ModalEditCollection from '@/components/organism/CollectionDetail/ModalEditCollection'
import ModalRemoveCollection from '@/components/organism/CollectionDetail/ModalRemoveCollection'
import CollectionDetailTemplate from '@/components/templates/CollectionDetailTemplate'
import { CollectionDetailCtxProvider } from '@/context/CollectionDetailCtx'

export default function Detail() {
  return (
    <CollectionDetailCtxProvider>
      <CollectionDetailTemplate />
      <ModalEditCollection />
      <ModalRemoveCollection />
    </CollectionDetailCtxProvider>
  )
}
