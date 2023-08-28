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

export default function ModalAddToCollection() {
  const {
    isOpen,
    currentCollectionList,
    handleAddToCollection,
    handleOpenModalCreateCollection,
    handleClose,
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
          <ContentModalAddCollection />
        </ModalContent>

        <Button
          onClick={handleAddToCollection}
          disabled={currentCollectionList === null}
        >
          add to selected collection
        </Button>
        <Button
          onClick={handleOpenModalCreateCollection}
          custom-background-color='#a1e5f5'
        >
          create new collection
        </Button>
      </div>
    </ModalLayout>
  )
}
