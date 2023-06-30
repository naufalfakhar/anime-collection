import * as React from 'react'
import { TemplateLayout, PageTitle } from '@/components/styles'
import { getLocalStorage, postCollection } from '@/utils'
import { useParams } from 'react-router-dom'

export default function CollectionDetailTemplate() {
  const { id } = useParams<{ id: string }>()
  const currentCollectionList = getLocalStorage('collection')
  const obj = currentCollectionList[id ?? '']

  console.log(
    currentCollectionList.find((collection) => collection.name === id)
  )
  React.useEffect(() => {
    console.log('obj', obj)
  }, [obj])

  const handleDelete = (id) => {
    const updatedAnimeCollection = obj.animes.filter((anime) => anime.id !== id)
    postCollection({ ...obj, animes: updatedAnimeCollection })
  }

  return (
    <TemplateLayout>
      <PageTitle>{obj?.name} Detail</PageTitle>
      <div>{id}</div>
      {obj.animes.map((anime) => (
        <div key={anime.id}>
          <div>{anime.title.romaji}</div>
          <button onClick={() => handleDelete(anime.id)}>remove</button>
          <button>edit</button>
        </div>
      ))}
    </TemplateLayout>
  )
}
