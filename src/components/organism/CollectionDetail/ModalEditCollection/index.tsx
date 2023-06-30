import {
  Button,
  ButtonClose,
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
        <ContentModalEditCollection />
        <Button onClick={handleEdit}>edit collection</Button>
      </div>
    </ModalLayout>
  )
}
