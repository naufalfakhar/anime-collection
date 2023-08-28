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
import Pagination from './Pagination'

export default function ModalBulkAdd() {
  const { isOpen, handleClose, handleOpenModalAddToCollection } =
    useController()

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

        <ModalContent>
          <ContentModalAddCollection />
          <Pagination />
        </ModalContent>

        <Button onClick={handleOpenModalAddToCollection}>
          add to collection...
        </Button>
      </div>
    </ModalLayout>
  )
}
