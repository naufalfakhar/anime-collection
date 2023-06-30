import { Button, ModalHeader, ModalLayout } from '@/components/styles'
import { useController } from './useController'
import ContentModalCollectionInfo from './content'

export default function ModalCollectionInfo() {
  const { isOpen, handleClose } = useController()

  if (!isOpen) return null

  return (
    <ModalLayout>
      <div>
        <ModalHeader>
          <p>This Anime Currently in...</p>
        </ModalHeader>
        <ContentModalCollectionInfo />
        <Button onClick={handleClose}>close</Button>
      </div>
    </ModalLayout>
  )
}
