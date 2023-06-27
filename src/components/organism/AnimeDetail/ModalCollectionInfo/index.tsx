import { ModalLayout } from '@/components/styles'
import { useController } from './useController'
import ContentModalCollectionInfo from './content'

export default function ModalCollectionInfo() {
  const { isOpen, handleClose } = useController()

  if (!isOpen) return null

  return (
    <ModalLayout>
      <div>
        <div>ModalCollectionInfo</div>
        <ContentModalCollectionInfo />
        <button onClick={handleClose}>close</button>
      </div>
    </ModalLayout>
  )
}
