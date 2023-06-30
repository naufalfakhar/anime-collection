import { Input, MaxLength } from '@/components/styles'
import { useController } from '../useController'

export default function ContentModalEditCollection() {
  const { handleChange, newName } = useController()

  return (
    <form>
      <Input
        type='text'
        placeholder='title'
        name='name'
        value={newName}
        onChange={handleChange}
      />
      <MaxLength con={newName.length <= 16 ? false : true}>
        <p>max length is 16.</p> {newName.length}/16
      </MaxLength>
    </form>
  )
}
