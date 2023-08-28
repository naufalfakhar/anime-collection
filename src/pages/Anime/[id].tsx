import { AnimeDetailCtxProvider } from '@/context/AnimeDetailCtx'
import AnimeDetailTemplate from '@/components/templates/AnimeDetailTemplate'
import ModalCollectionInfo from '@/components/organism/AnimeDetail/ModalCollectionInfo'
import ModalCreateCollection from '@/components/organism/AnimeDetail/ModalCreateCollection'
import ModalAddToCollection from '@/components/organism/AnimeDetail/ModalAddToCollection'

export default function Detail() {
  return (
    <AnimeDetailCtxProvider>
      <AnimeDetailTemplate />
      <ModalAddToCollection />
      <ModalCreateCollection />
      <ModalCollectionInfo />
    </AnimeDetailCtxProvider>
  )
}
