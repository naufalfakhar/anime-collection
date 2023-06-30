import {
  Button,
  ButtonClose,
  ModalHeader,
  ModalLayout,
} from '@/components/styles'
import ContentModalAddCollection from './content'
import { useController } from './useController'
import { X } from 'lucide-react'

export default function ModalAddCollection() {
  const { isOpen, handleAddToCollection, handleOpenModalNewCollection } =
    useController()

  if (!isOpen) return null

  return (
    <ModalLayout>
      <div>
        <ModalHeader>
          <p>Add Anime to...</p>
          <ButtonClose onClick={handleAddToCollection}>
            <X />
          </ButtonClose>
        </ModalHeader>
        <ContentModalAddCollection />
        <Button onClick={handleOpenModalNewCollection}>new collection</Button>
      </div>
    </ModalLayout>
  )
}
