import { Header, PageTitle } from '@/components/styles'
import { Link } from 'react-router-dom'

export default function AnimeListHeader() {
  return (
    <Header>
      <Link to={'/'}>
        <PageTitle>Anime List</PageTitle>
      </Link>
      <Link to={'/collection'}>Collection</Link>
    </Header>
  )
}
