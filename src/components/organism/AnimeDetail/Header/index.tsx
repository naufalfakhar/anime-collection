import { Header, PageTitle } from '@/components/styles'
import { Link } from 'react-router-dom'

export default function AnimeDetailHeader() {
  return (
    <Header>
      <Link to={'/'}>AniCollect</Link>
      <PageTitle>Anime Detail</PageTitle>
      <Link to={'/collection'}>Collection</Link>
    </Header>
  )
}
