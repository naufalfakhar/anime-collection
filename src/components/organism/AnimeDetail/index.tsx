import * as React from 'react'
import { useParams } from 'react-router-dom'
import { useController } from './useController'

export default function AnimeDetail() {
  const { id } = useParams<{ id: string }>()

  const {
    collectionsUpdated,
    Media,
    loading,
    setId,
    handleOpenModalAddCollection,
    handleOpenModalCollectionInfo,
  } = useController()

  React.useEffect(() => {
    setId(parseInt(id ?? '0'))
  }, [id, setId])

  if (loading) return <div>loading...</div>

  const {
    bannerImage,
    coverImage,
    title,
    description,
    episodes,
    genres,
    meanScore,
  } = Media

  return (
    <div>
      <img src={bannerImage} alt={title.romaji} />
      <img src={coverImage.large} alt={title.romaji} />
      <button onClick={handleOpenModalAddCollection}>add to collection</button>
      <button onClick={handleOpenModalCollectionInfo}>collection info</button>
      <h2>{title.romaji}</h2>
      <p>{description}</p>
      <span>{episodes}</span>
      <span>{genres}</span>
      <span>{meanScore}</span>
    </div>
  )
}
