import { gql } from '@apollo/client'

export const GET_ANIME = gql`
  query GET_ANIME($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(id: $id, search: $search) {
        id
        bannerImage
        coverImage {
          extraLarge
          large
          medium
          color
        }
        title {
          romaji
          english
          native
          userPreferred
        }
        description
        episodes
        genres
        meanScore
        season
        seasonYear
        type
        format
        status
      }
    }
  }
`

export const GET_ANIME_DETAIL = gql`
  query GET_ANIME_DETAIL($id: Int) {
    Media(id: $id) {
      id
      bannerImage
      coverImage {
        extraLarge
        large
        medium
        color
      }
      title {
        romaji
        english
        native
        userPreferred
      }
      description
      episodes
      genres
      meanScore
      season
      seasonYear
      type
      format
      status
    }
  }
`
