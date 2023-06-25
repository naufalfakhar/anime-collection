import { useParams } from 'react-router-dom'

export default function AnimeDetail() {
  const { id } = useParams<{ id: string }>()

  return <div>anime id : {id}</div>
}
