import { IAnime, ICollection } from '@/types'

export const getLocalStorage = (key: string) => {
  const collection = localStorage.getItem(key)
  return collection ? JSON.parse(collection) : null
}

export const postCollection = (collection: object) => {
  localStorage.setItem('collection', JSON.stringify(collection))
}

export const postToSelectedCollection = (
  prevSelectedCollection: string[],
  selectedCollection: string[],
  removedCollection: string[],
  animeObject: IAnime
) => {
  const currentCollection = getLocalStorage('collection')
  if (currentCollection) {
    const newCollection = selectedCollection
      .filter((item) => !prevSelectedCollection.includes(item))
      .concat(
        prevSelectedCollection.filter(
          (item) => !selectedCollection.includes(item)
        )
      )

    const filteredCollection = newCollection
      .filter((item) => !prevSelectedCollection.includes(item))
      .filter((item) => !removedCollection.includes(item))

    const result = currentCollection.map((item: ICollection) => {
      if (prevSelectedCollection.length > 0) {
        if (filteredCollection.includes(item.name)) {
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
          console.log('new collection added 2')
        }
      }

      return item
    })
    // localStorage.setItem('collection', JSON.stringify(result))
    postCollection(result)
  }
}

export const removeCollection = (removedCollection: string) => {
  const currentCollection = getLocalStorage('collection')
  if (currentCollection) {
    const result = currentCollection.filter(
      (item: ICollection) => item.name !== removedCollection
    )
    postCollection(result)
  }
}

export const updateCollection = (updatedCollection: ICollection) => {
  const currentCollection = getLocalStorage('collection')
  if (currentCollection) {
    const result = currentCollection.map((item: ICollection) => {
      if (item.name === updatedCollection.name) {
        item.animes = updatedCollection.animes
      }
      return item
    })
    console.log(result)
    postCollection(result)
  }
}
