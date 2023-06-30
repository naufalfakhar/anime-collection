import { IAnime, IPageInfo } from '@/types'
import { Dispatch } from 'react'

export type TState = {
  pageInfo: IPageInfo
  media: IAnime[]
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
