import {
  Button,
  ButtonClose,
  ModalContent,
  ModalHeader,
  ModalLayout,
} from '@/components/styles'
import ContentModalAddToCollection from './content'
import { useController } from './useController'
import { X } from 'lucide-react'

export default function ModalAddToCollection() {
  const {
    isOpen,
    currentCollectionList,
    handleClose,
    handleAddToCollection,
    handleOpenModalNewCollection,
  } = useController()

  if (!isOpen) return null

  return (
    <ModalLayout>
      <div>
        <ModalHeader>
          <p>Add Anime to...</p>
          <ButtonClose onClick={handleClose}>
            <X />
          </ButtonClose>
        </ModalHeader>

        <ModalContent>
          <ContentModalAddToCollection />
        </ModalContent>

        <Button
          onClick={handleAddToCollection}
          disabled={currentCollectionList === null}
        >
          add to selected collection
        </Button>
        <Button
          onClick={handleOpenModalNewCollection}
          custom-background-color='#a1e5f5'
        >
          create new collection
        </Button>
      </div>
    </ModalLayout>
  )
}
