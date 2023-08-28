import {
  LabelCheckbox,
  GroupCol,
  ModalContentLoading,
  TextOverflow,
} from '@/components/styles'
import { useController } from '../useController'

export default function ContentModalAddCollection() {
  const { loading, animeListModal, handleCheckAnime } = useController()

  if (loading)
    return (
      <GroupCol>
        {Array.from(Array(10).keys()).map((_, i) => (
          <ModalContentLoading key={i} />
        ))}
      </GroupCol>
    )

  return (
    <GroupCol>
      {animeListModal.map((media) => {
        return (
          <LabelCheckbox key={media.id}>
            <input
              type='checkbox'
              name={media.title.romaji}
              onChange={handleCheckAnime}
            />
            <TextOverflow>{media.title.romaji}</TextOverflow>
          </LabelCheckbox>
        )
      })}
    </GroupCol>
  )
}
