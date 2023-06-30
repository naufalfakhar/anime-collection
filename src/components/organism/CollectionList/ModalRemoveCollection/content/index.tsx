import { useController } from '../useController'

export default function ContentModalRemoveCollection() {
  const { thisCollection } = useController()
  return <div>{thisCollection}</div>
}
