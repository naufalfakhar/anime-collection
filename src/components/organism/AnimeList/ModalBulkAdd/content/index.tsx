import {
  BulkContent,
  BulkGroup,
  Input,
  LabelGroup,
  MaxLength,
} from '@/components/styles'
import { useController } from '../useController'

export default function ContentModalAddCollection() {
  const {
    mediaModal,
    handleCheckAnime,
    selectedAnime,
    newCollection,
    handleChange,
  } = useController()

  console.log(selectedAnime)

  return (
    <div>
      <form>
        <Input
          type='text'
          placeholder='title'
          name='name'
          value={newCollection.name}
          onChange={handleChange}
        />
        <MaxLength con={newCollection.name.length <= 16 ? false : true}>
          <p>max length is 16.</p> {newCollection.name.length}/16
        </MaxLength>
      </form>
      <BulkContent>
        <LabelGroup>
          {mediaModal.map((media) => {
            return (
              <BulkGroup key={media.id}>
                <input
                  type='checkbox'
                  name={media.title.romaji}
                  onChange={handleCheckAnime}
                />
                <p>{media.title.romaji}</p>
              </BulkGroup>
            )
          })}
        </LabelGroup>
      </BulkContent>
    </div>
  )
}
