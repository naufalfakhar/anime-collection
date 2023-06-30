import ModalBulkAdd from '@/components/organism/AnimeList/ModalBulkAdd'
import AnimeListTemplate from '@/components/templates/AnimeListTemplate'
import { AnimeListCtxProvider } from '@/context/AnimeListCtx'

export default function Anime() {
  return (
    <AnimeListCtxProvider>
      <AnimeListTemplate />
      <ModalBulkAdd />
    </AnimeListCtxProvider>
  )
}
