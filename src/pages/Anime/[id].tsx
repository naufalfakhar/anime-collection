import ModalAddCollection from '@/components/organism/AnimeDetail/ModalAddCollection'
import ModalCollectionInfo from '@/components/organism/AnimeDetail/ModalCollectionInfo'
import ModalNewCollection from '@/components/organism/AnimeDetail/ModalNewCollection'
import AnimeDetailTemplate from '@/components/templates/AnimeDetailTemplate'
import { AnimeDetailCtxProvider } from '@/context/AnimeDetailCtx'

export default function Detail() {
  return (
    <AnimeDetailCtxProvider>
      <AnimeDetailTemplate />
      <ModalAddCollection />
      <ModalNewCollection />
      <ModalCollectionInfo />
    </AnimeDetailCtxProvider>
  )
}
