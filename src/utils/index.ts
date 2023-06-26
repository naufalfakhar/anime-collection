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
