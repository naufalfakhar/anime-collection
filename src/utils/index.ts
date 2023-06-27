import { TCollections, TMedia } from '@/context/AnimeDetailCtx/types'

export const getCollection = () => {
  const collection = localStorage.getItem('collection')
  return collection ? JSON.parse(collection) : null
}

export const postCollection = (collection: object) => {
  const currentCollection = getCollection()
  if (currentCollection) {
    localStorage.setItem('collection', JSON.stringify(collection))
  } else {
    localStorage.setItem('collection', JSON.stringify(collection))
  }
}

export const postToSelectedCollection = (
  prevSelectedCollection: string[],
  selectedCollection: string[],
  animeObject: TMedia,
  currentCollection: TCollections[]
) => {
  if (currentCollection) {
    const newCollection = selectedCollection
      .filter((item) => !prevSelectedCollection.includes(item))
      .concat(
        prevSelectedCollection.filter(
          (item) => !selectedCollection.includes(item)
        )
      )
    console.log(prevSelectedCollection, 'prev selected collection')
    console.log(selectedCollection, 'selcted collection')
    console.log(newCollection, 'new collection')
    const result = currentCollection.map((item: TCollections) => {
      console.log(newCollection.includes(item.name), 'new collection includes')
      if (selectedCollection.includes(item.name)) {
        if (newCollection.includes(item.name)) {
          item.animes.push(animeObject)
        }
      } else {
        item.animes = item.animes.filter(
          (itm: TMedia) => itm.id !== animeObject.id
        )
      }
      return item
    })
    localStorage.setItem('collection', JSON.stringify(result))
  }
}
