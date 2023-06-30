import {
  Button,
  ButtonClose,
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
        <ContentModalRemoveCollection />
        <Button onClick={handleRemoveCollection}>Remove</Button>
      </div>
    </ModalLayout>
  )
}
