import { useController } from '../useController'

export default function ContentModalRemoveCollection() {
  const { thisAnime } = useController()
  return <div>{thisAnime}</div>
}
