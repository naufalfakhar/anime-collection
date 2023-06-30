import {
  BulkContent,
  Button,
  ButtonClose,
  ModalHeader,
  ModalLayout,
} from '@/components/styles'
import ContentModalAddCollection from './content'
import { useController } from './useController'
import { X } from 'lucide-react'

export default function ModalBulkAdd() {
  const { isOpen, handleClose, handleCreate } = useController()

  if (!isOpen) return null

  return (
    <ModalLayout>
      <div>
        <ModalHeader>
          <p>bulk add collection</p>
          <ButtonClose onClick={handleClose}>
            <X />
          </ButtonClose>
        </ModalHeader>

        <ContentModalAddCollection />

        <Button onClick={handleCreate}>create collection</Button>
      </div>
    </ModalLayout>
  )
}
