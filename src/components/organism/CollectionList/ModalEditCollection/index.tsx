import {
  Button,
  ButtonClose,
  ModalContent,
  ModalHeader,
  ModalLayout,
} from '@/components/styles'
import { useController } from './useController'
import ContentModalEditCollection from './content'
import { X } from 'lucide-react'

export default function ModalEditCollection() {
  const { isOpen, handleClose, handleEdit } = useController()

  if (!isOpen) return null

  return (
    <ModalLayout>
      <div>
        <ModalHeader>
          <p>Edit collection</p>
          <ButtonClose onClick={handleClose}>
            <X />
          </ButtonClose>
        </ModalHeader>

        <ModalContent>
          <ContentModalEditCollection />
        </ModalContent>

        <Button
          onClick={handleEdit}
          custom-color='#f5f5f7'
          custom-background-color='#3b82f6'
        >
          edit collection
        </Button>
      </div>
    </ModalLayout>
  )
}
