import { AnimeListLayout, AnimeListGroup } from '@/components/styles'
import Pagination from '@/components/organism/AnimeList/Pagination'
import AnimeList from '@/components/organism/AnimeList'
import { useAnimeListCtx } from '@/context/AnimeListCtx'
import { useController } from './useController'

export default function AnimeListTemplate() {
  const {
    state: { pageInfo },
  } = useAnimeListCtx()

  const { media, loading, handlePageChange, handlePageChangeNext } =
    useController()

  return (
    <AnimeListLayout>
      <h1>Anime List</h1>
      <AnimeListGroup>
        <AnimeList media={media} loading={loading} />
      </AnimeListGroup>
      <Pagination
        {...pageInfo}
        onPageChange={handlePageChange}
        onPageChangeNext={handlePageChangeNext}
      />
    </AnimeListLayout>
  )
}
