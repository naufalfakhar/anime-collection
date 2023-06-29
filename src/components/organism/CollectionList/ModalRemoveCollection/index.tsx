import { ModalLayout } from '@/components/styles'
import ContentModalRemoveCollection from './content'
import { useController } from './useController'

export default function ModalRemoveCollection() {
  const { isOpen, handleClose, handleRemoveCollection, thisCollection } =
    useController()

  if (!isOpen) return null

  console.log(thisCollection)

  return (
    <ModalLayout>
      <div>
        <div>are u sure?</div>
        <ContentModalRemoveCollection />
        <div>
          <button onClick={handleClose}>close</button>
          <button onClick={handleRemoveCollection}>Remove</button>
        </div>
      </div>
    </ModalLayout>
  )
}
