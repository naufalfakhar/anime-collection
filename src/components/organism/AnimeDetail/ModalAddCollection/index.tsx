import { ModalLayout } from '@/components/styles'
import ContentModalAddCollection from './content'
import { useController } from './useController'

export default function ModalAddCollection() {
  const {
    selectedCollection,
    isOpen,
    handleClose,
    handleAddToCollection,
    handleOpenModalNewCollection,
  } = useController()

  if (!isOpen) return null

  return (
    <ModalLayout>
      <div>
        <div>Add Anime to ... </div>
        <ContentModalAddCollection />
        <div>
          <button onClick={handleClose}>close</button>
          <button onClick={handleAddToCollection}>done</button>
          <button onClick={handleOpenModalNewCollection}>new collection</button>
        </div>
      </div>
    </ModalLayout>
  )
}
