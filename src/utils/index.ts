import { IAnime, ICollection } from '@/types'

export const getLocalStorage = (key: string) => {
  const collection = localStorage.getItem(key)
  return collection ? JSON.parse(collection) : null
}

export const postCollection = (collection: object) => {
  localStorage.setItem('collection', JSON.stringify(collection))
}

export const addToSelectedCollection = (
  selectedCollectionName: string[],
  animesObject: IAnime[]
) => {
  const currentCollectionList = getLocalStorage('collection')
  if (currentCollectionList) {
    const result = currentCollectionList.map((item: ICollection) => {
      if (selectedCollectionName.includes(item.name)) {
        item.animes = item.animes.concat(animesObject)
        const unique = item.animes.filter(
          (item, index, self) =>
            index === self.findIndex((t) => t.id === item.id)
        )
        item.animes = unique
      }
      return item
    })
    postCollection(result)
  }
}

export const postToSelectedCollection = (
  prevSelectedCollection: string[],
  selectedCollection: string[],
  removedCollection: string[],
  animeObject: IAnime
) => {
  const currentCollectionList = getLocalStorage('collection')
  if (currentCollectionList) {
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

    const result = currentCollectionList.map((item: ICollection) => {
      if (prevSelectedCollection.length > 0) {
        if (filteredCollection.includes(item.name)) {
          item.animes.push(animeObject)
        }
        if (removedCollection.includes(item.name)) {
          item.animes = item.animes.filter(
            (anime) => anime.id !== animeObject.id
          )
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
    postCollection(result)
  }
}

export const removeCollection = (removedCollection: string) => {
  const currentCollectionList = getLocalStorage('collection')
  if (currentCollectionList) {
    const result = currentCollectionList.filter(
      (item: ICollection) => item.name !== removedCollection
    )
    postCollection(result)
  }
}

export const updateCollection = (updatedCollection: ICollection) => {
  const currentCollectionList = getLocalStorage('collection')
  if (currentCollectionList) {
    const result = currentCollectionList.map((item: ICollection) => {
      if (item.name === updatedCollection.name) {
        item.animes = updatedCollection.animes
      }
      return item
    })
    postCollection(result)
  }
}
