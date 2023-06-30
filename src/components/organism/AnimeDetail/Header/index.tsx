import { Header, PageTitle } from '@/components/styles'
import { Link } from 'react-router-dom'

export default function AnimeDetailHeader() {
  return (
    <Header>
      <Link to={'/'}>
        <PageTitle>Anime Detail</PageTitle>
      </Link>
      <Link to={'/collection'}>Collection</Link>
    </Header>
  )
}
