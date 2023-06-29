import { Link } from 'react-router-dom'
import { useController } from './useController'

export default function CollectionList() {
  const { currentCollectionList, handleOpenModalRemoveCollection } =
    useController()
  return (
    <div>
      {currentCollectionList.map((collections: any, i: any) => (
        <div key={i}>
          <Link to={`/collection/${collections.name}`}>
            {/* <img
              src={
                collections.animes.map((anime) => anime.bannerImage)[0] ??
                '/src/assets/no-image.png'
              }
              alt={collections.name}
            /> */}
            <h1>{collections.name}</h1>
          </Link>
          <button
            onClick={() => handleOpenModalRemoveCollection(collections.name)}
          >
            remove
          </button>
          <button>edit</button>
        </div>
      ))}
    </div>
  )
}
