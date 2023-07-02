import {
  Button,
  ButtonClose,
  ModalContent,
  ModalHeader,
  ModalLayout,
} from '@/components/styles'
import ContentModalRemoveCollection from './content'
import { useController } from './useController'
import { X } from 'lucide-react'

export default function ModalRemoveCollection() {
  const { isOpen, handleClose, handleRemoveCollection } = useController()

  if (!isOpen) return null

  return (
    <ModalLayout>
      <div>
        <ModalHeader>
          <p>are u sure want to remove?</p>
          <ButtonClose onClick={handleClose}>
            <X />
          </ButtonClose>
        </ModalHeader>

        <ModalContent>
          <ContentModalRemoveCollection />
        </ModalContent>

        <Button
          onClick={handleRemoveCollection}
          custom-color='#f5f5f7'
          custom-background-color='#dc2626'
        >
          Remove
        </Button>
      </div>
    </ModalLayout>
  )
}
