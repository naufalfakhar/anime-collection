export interface IPagination {
  pageInfo: {
    total: number
    currentPage: number
    lastPage: number
    hasNextPage: boolean
    perPage: number
  }
}

export interface IAnime {
  id: number
  title: {
    romaji: string
  }
  coverImage: {
    extraLarge: string
    large: string
    medium: string
    color: string
  }
  season: string
  seasonYear: number
}

export interface IAnimeList {
  media: IAnime[]
}
