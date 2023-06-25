import { Dispatch } from 'react'

export type TState = {
  pageInfo: {
    total: number
    currentPage: number
    lastPage: number
    hasNextPage: boolean
    perPage: number
  }
  media: {
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
  }[]
  skip: boolean
}

export type TAction =
  | {
      type: 'SET_PAGINATION'
      pagination: TState['pageInfo']
    }
  | { type: 'SET_MEDIA'; media: TState['media'] }
  | { type: 'SET_SKIP'; skip: TState['skip'] }

export type TDefaultValue = {
  state: TState
  dispatch: Dispatch<TAction>
  setPagination: (payload: TState['pageInfo']) => void
  setMedia: (payload: TState['media']) => void
  setSkip: (payload: TState['skip']) => void
}
