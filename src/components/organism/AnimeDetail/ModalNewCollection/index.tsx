import {
  Button,
  ButtonClose,
  ModalHeader,
  ModalLayout,
} from '@/components/styles'
import { useController } from './useController'
import ContentModalNewCollection from './content'
import { X } from 'lucide-react'

export default function ModalNewCollection() {
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
        <ContentModalNewCollection />
        <Button onClick={handleCreate}>create</Button>
      </div>
    </ModalLayout>
  )
}
