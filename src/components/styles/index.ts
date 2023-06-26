import styled from '@emotion/styled'

export const Layout = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`

export const HeaderElement = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

export const AnimeListLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  gap: 1rem;
`

export const AnimeListGroup = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  width: 100%;
  list-style: none;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`

export const Card = styled.li`
  > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    > img {
      border-radius: 0.5rem;
      width: 100%;
      height: 100%;
      aspect-ratio: auto;
    }
    > div {
      margin-top: 0.5rem;
      width: 100%;
      display: flex;
      items-align: center;
      justify-content: space-between;
    }
    > h2 {
      font-size: 0.75rem;
      text-align: center;
    }
  }
`

export const CardLoading = styled.li`
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    @keyframes pulse {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }
    > div {
      border-radius: 0.5rem;
      height: 250px;
      width: 100%;
      background-color: #334155;

      @media (min-width: 1024px) {
        height: 400px;
      }
    }
  }
`

export const ModalLayout = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 50%);
  > div {
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-y: auto;
    background-color: #dedede;
    @media (prefers-color-scheme: dark) {
          background-color: #212121 ;
  }
`

export const LabelGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
