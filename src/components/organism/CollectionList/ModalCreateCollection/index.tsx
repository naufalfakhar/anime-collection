import {
  Button,
  ButtonClose,
  ModalContent,
  ModalHeader,
  ModalLayout,
} from '@/components/styles'
import ContentModalAddCollection from './content'
import { useController } from './useController'
import { X } from 'lucide-react'

export default function ModalCreateCollection() {
  const { isOpen, handleClose, handleCreate } = useController()

  if (!isOpen) return null

  return (
    <ModalLayout>
      <div>
        <ModalHeader>
          <p>Create new collection</p>
          <ButtonClose onClick={handleClose}>
            <X />
          </ButtonClose>
        </ModalHeader>

        <ModalContent>
          <ContentModalAddCollection />
        </ModalContent>

        <Button onClick={handleCreate}>create</Button>
      </div>
    </ModalLayout>
  )
}
