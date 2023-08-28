import { Header, IconButton, PageTitle } from '@/components/styles'
import { Archive, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AnimeDetailHeader() {
  return (
    <Header>
      <Link to={'/'}>
        <IconButton>
          <Home />
        </IconButton>
      </Link>
      <PageTitle>Anime Detail</PageTitle>
      <Link to={'/collection'}>
        <IconButton>
          <Archive />
        </IconButton>
      </Link>
    </Header>
  )
}
