import styled from '@emotion/styled'

export const theme = {
  colors: {
    background: {
      summer: '#FFD700',
      winter: '#B3DAF1',
      spring: '#FFF1A6',
      fall: '#D45B12',
    },
  },
}

export const Layout = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const PageTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`

export const AnimeListLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const AnimeListGroup = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  width: 100%;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 250px);
  }
`

export const Card = styled.li`
  height: 380px;
  > a {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
`

export const CardOverlay = styled.div`
  border-radius: 1rem;
  position: absolute;
  inset: 0;
  z-index: 1;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  gap: 0.5rem;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 20%,
    rgba(0, 0, 0, 0.5) 40%,
    rgba(0, 0, 0, 0.1) 60%
  );
`

export const CardTitle = styled.h2`
  font-size: 0.8rem;
  text-align: start;
`

export const CardSpanGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CardSpan = styled.span`
  font-size: 0.6rem;
  padding: 0.2rem 0.4rem;
  border-radius: 0.5rem;
  background-color: #f5f5f7;
  color: #1d1d1f;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  text-transform: lowercase;
`

export const CardLoading = styled.li`
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 380px;
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
