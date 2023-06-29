import { useController } from '../useController'

export default function ContentModalAddCollection() {
  const { handleChange, newCollection, isUnique } = useController()

  return (
    <form>
      <input
        type='text'
        placeholder='title'
        name='name'
        value={newCollection.name}
        onChange={handleChange}
      ></input>
      {!isUnique && <p>Input value must be unique.</p>}
    </form>
  )
}
