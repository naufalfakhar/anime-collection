import CollectionDetailTemplate from '@/components/templates/CollectionDetailTemplate'
import { CollectionDetailCtxProvider } from '@/context/CollectionDetailCtx'

export default function CollectionDetail() {
  return (
    <CollectionDetailCtxProvider>
      <CollectionDetailTemplate />
    </CollectionDetailCtxProvider>
  )
}
