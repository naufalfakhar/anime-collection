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
  removedCollection: string[],
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
    console.log('new collection', newCollection)
    console.log('prev collection', prevSelectedCollection)
    console.log('selected collection', selectedCollection)
    console.log('removed collection', removedCollection)

    const result = currentCollection.map((item: TCollections) => {
      if (selectedCollection.length === 0) {
        item.animes = item.animes.filter(
          (itm: TMedia) => itm.id !== animeObject.id
        )
        console.log('all collection removed')
      }
      if (prevSelectedCollection.length > 0) {
        if (newCollection.includes(item.name)) {
          item.animes.push(animeObject)
          console.log('new collection added')
        }
        if (removedCollection.includes(item.name)) {
          item.animes = item.animes.filter(
            (anime) => anime.id !== animeObject.id
          )
          console.log('collection removed')
        }
      }
      if (prevSelectedCollection.length === 0) {
        if (selectedCollection.includes(item.name)) {
          item.animes.push(animeObject)
          console.log('new collection added')
        }
      }

      return item
    })
    localStorage.setItem('collection', JSON.stringify(result))
  }
}
