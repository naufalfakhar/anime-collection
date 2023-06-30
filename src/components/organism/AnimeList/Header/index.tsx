import { Header, PageTitle } from '@/components/styles'
import { Link } from 'react-router-dom'
import { Archive } from 'lucide-react'

export default function AnimeListHeader() {
  return (
    <Header>
      <Link to={'/'}>AniCollect</Link>
      <PageTitle>Anime List</PageTitle>
      <Link to={'/collection'}>
        <Archive />
      </Link>
    </Header>
  )
}
