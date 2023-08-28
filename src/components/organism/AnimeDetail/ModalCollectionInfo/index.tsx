import {
  Button,
  ModalContent,
  ModalHeader,
  ModalLayout,
} from '@/components/styles'
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

        <ModalContent>
          <ContentModalCollectionInfo />
        </ModalContent>

        <Button
          onClick={handleClose}
          custom-color='#52525b'
          custom-background-color='#f5f5f7'
        >
          close
        </Button>
      </div>
    </ModalLayout>
  )
}
