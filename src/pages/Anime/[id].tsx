import AnimeDetailTemplate from '@/components/templates/AnimeDetailTemplate'
import { AnimeDetailCtxProvider } from '@/context/AnimeDetailCtx'

export default function Detail() {
  return (
    <AnimeDetailCtxProvider>
      <AnimeDetailTemplate />
    </AnimeDetailCtxProvider>
  )
}
