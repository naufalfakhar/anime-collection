import { ModalLayout } from '@/components/styles'
import { useController } from './useController'
import ContentModalNewCollection from './content'

export default function ModalNewCollection() {
  const { isOpen, handleClose, handleCreate } = useController()

  if (!isOpen) return null

  return (
    <ModalLayout>
      <div>
        <div>New Collection </div>
        <ContentModalNewCollection />
        <div>
          <button onClick={handleClose}>cancel</button>
          <button onClick={handleCreate}>create</button>
        </div>
      </div>
    </ModalLayout>
  )
}
