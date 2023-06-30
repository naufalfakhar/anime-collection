export interface IPageInfo {
  total: number
  currentPage: number
  lastPage: number
  hasNextPage: boolean
  perPage: number
}

export interface IAnime {
  id: number
  title: {
    romaji: string
    english: string
    native: string
  }
  coverImage: {
    extraLarge: string
    large: string
    medium: string
    color: string
  }
  bannerImage: string
  season: string
  seasonYear: number
  description: string
  episodes: number
  genres: string[]
  meanScore: number
}

export interface ICollection {
  name: string
  animes: IAnime[]
}

export interface IAnimeList {
  media: IAnime[]
}
