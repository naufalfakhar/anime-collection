import { ModalLayout } from '@/components/styles'
import ContentModalAddCollection from './content'
import { useController } from './useController'

export default function ModalAddCollection() {
  const { isOpen, handleClose, handleCreate } = useController()

  if (!isOpen) return null
  console.log('tes')

  return (
    <ModalLayout>
      <div>
        <div>Create new collection ... </div>
        <ContentModalAddCollection />
        <div>
          <button onClick={handleClose}>close</button>
          <button onClick={handleCreate}>create collection</button>
        </div>
      </div>
    </ModalLayout>
  )
}
