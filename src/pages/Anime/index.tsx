import { AnimeListCtxProvider } from '@/context/AnimeListCtx'
import AnimeListTemplate from '@/components/templates/AnimeListTemplate'
import ModalBulkAdd from '@/components/organism/AnimeList/ModalBulkAdd'
import ModalAddToCollection from '@/components/organism/AnimeList/ModalAddToCollection'
import ModalCreateCollection from '@/components/organism/AnimeList/ModalCreateCollection'

export default function Anime() {
  return (
    <AnimeListCtxProvider>
      <AnimeListTemplate />
      <ModalBulkAdd />
      <ModalAddToCollection />
      <ModalCreateCollection />
    </AnimeListCtxProvider>
  )
}
