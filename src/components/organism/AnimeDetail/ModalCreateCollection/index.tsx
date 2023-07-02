import {
  Button,
  ButtonClose,
  ModalContent,
  ModalHeader,
  ModalLayout,
} from '@/components/styles'
import { useController } from './useController'
import ContentModalCreateCollection from './content'
import { X } from 'lucide-react'

export default function ModalCreateCollection() {
  const { isOpen, handleClose, handleCreate } = useController()

  if (!isOpen) return null

  return (
    <ModalLayout>
      <div>
        <ModalHeader>
          <p>Let's Create a Collection</p>
          <ButtonClose onClick={handleClose}>
            <X />
          </ButtonClose>
        </ModalHeader>

        <ModalContent>
          <ContentModalCreateCollection />
        </ModalContent>

        <Button onClick={handleCreate}>create</Button>
      </div>
    </ModalLayout>
  )
}
