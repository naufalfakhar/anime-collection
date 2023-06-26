import { ModalLayout } from '@/components/styles'
import ContentModalAddCollection from './content'
import { useController } from './useController'

export default function ModalCollectionInfo() {
  const { isOpen, handleClose } = useController()

  if (!isOpen) return null

  return (
    <ModalLayout>
      <div>
        <div>ModalCollectionInfo</div>
        <ContentModalAddCollection />
        <button onClick={handleClose}>close</button>
      </div>
    </ModalLayout>
  )
}
