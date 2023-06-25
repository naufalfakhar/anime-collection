import { Link } from 'react-router-dom'
import { HeaderElement } from './styles'

export default function Header() {
  return (
    <HeaderElement>
      <Link to={'/'}>AniCollect</Link>
      <Link to={'/collection'}>Collection</Link>
    </HeaderElement>
  )
}
