import { Dispatch } from 'react'

export type TState = {
  id: number
  Media: {
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
  skip: boolean
}

export type TAction =
  | { type: 'SET_ID'; id: TState['id'] }
  | { type: 'SET_MEDIA'; Media: TState['Media'] }
  | { type: 'SET_SKIP'; skip: TState['skip'] }

export type TDefaultValue = {
  state: TState
  dispatch: Dispatch<TAction>
  setId: (payload: TState['id']) => void
  setMedia: (payload: TState['Media']) => void
  setSkip: (payload: TState['skip']) => void
}
