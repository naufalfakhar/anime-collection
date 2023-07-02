import { Input, MaxLength } from '@/components/styles'
import { useController } from '../useController'

export default function ContentModalCreateCollection() {
  const { newCollection, handleChange } = useController()

  return (
    <form>
      <Input
        type='text'
        placeholder='title'
        name='name'
        value={newCollection.name}
        onChange={handleChange}
      />
      <MaxLength condition={newCollection.name.length <= 16 ? false : true}>
        <p>max length is 16.</p> {newCollection.name.length}/16
      </MaxLength>
    </form>
  )
}
