import styled from '@emotion/styled'

// Region Layout Start
export const Layout = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
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

export const TemplateLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const ModalLayout = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 50%);
  z-index: 100;
  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 250px;
    max-width: 80vw;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    background-color: #dedede;
    @media (prefers-color-scheme: dark) {
      background-color: #212121;
    }
  }
`
// Region Layout End

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PageTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  @media (min-width: 1024px) {
    font-size: 32px;
  }
`

export const AnimeListGroup = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 160px);
  grid-gap: 1.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 250px);
  }
`

export const Card = styled.li`
  height: 230px;
  @media (min-width: 1024px) {
    height: 380px;
  }
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
  font-size: 14px;
  text-align: start;
  @media (min-width: 1024px) {
    font-size: 20px;
  }
`

export const CardSpanGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CardSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: lowercase;
  font-size: 10px;
  padding: 4px 6px;
  border-radius: 1rem;
  color: #f5f5f7;
  background-color: #52525b;
  min-width: 50px;
  @media (min-width: 1024px) {
    font-size: 14px;
    padding: 4px 6px;
  }
`

export const CardLoading = styled.li`
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 230px;
    @media (min-width: 1024px) {
      height: 380px;
    }
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
        height: 380px;
      }
    }
  }
`

export const PaginationGroup = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(7, 1fr);
  margin-top: 1rem;
  font-size: 0.8rem;
`

interface ButtonProps {
  cbc?: string
  cc?: string
  cn?: boolean
}

export const PaginationButton = styled.button<ButtonProps>`
  width: 30px;
  padding: 0.25rem;
  border: none;
  background-color: ${(props) => (props.cn ? '#94a3b8' : '#f5f5f7')};
  color: ${(props) => (props.cn ? '#f5f5f7' : '#1d1d1f')};
  &:hover {
    cursor: ${(props) => (props.cn ? 'not-allowed' : 'pointer')};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const AnimeDetailBanner = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

export const AnimeDetailContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    justify-content: start;
    align-items: start;
  }
`

export const AnimeDetailContentGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding-left: 170px;
  @media (min-width: 1024px) {
    padding-left: 310px;
    align-items: start;
  }
`

export const AnimeDetailCoverImage = styled.img`
  position: absolute;
  left: 10px;
  top: -50px;
  width: 150px;
  height: 230px;
  object-fit: cover;
  border-radius: 1rem;
  @media (min-width: 1024px) {
    width: 250px;
    height: 330px;
    left: 50px;
    top: -100px;
  }
`

export const AnimeDetailTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`

export const AnimeDetailTitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  > h2 {
    font-size: 10px;
    @media (min-width: 1024px) {
      font-size: 14px;
    }
`

export const AnimeDetailDescriptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: 2rem 0;
  > h2 {
    font-size: 14px;
    font-weight: 600;
    @media (min-width: 1024px) {
      font-size: 18px;
    }
  }
  > p {
    font-size: 12px;
    text-align: justify;
    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }
`

export const AnimeDetailInfoGroup = styled.ul`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.25rem;
  @media (min-width: 1024px) {
    gap: 0.5rem;
  }
  > li {
    font-size: 14px;
    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }
`
export const CollectionDetailInfoGroup = styled.ul`
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  @media (min-width: 1024px) {
    gap: 1.5rem;
  }
  > li {
    width: 100%;
    font-size: 14px;
    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }
`

export const AnimeDetailGenreGroup = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 10px;
  > li {
    padding: 4px 6px;
    border-radius: 0.5rem;
    border: 1px solid #f5f5f7;
    color: #f5f5f7;
  }
`

export const AnimeDetailButtonGroup = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

export const AnimeDetailButton = styled.button`
  width: 100%;
  max-height: 40px;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #f5f5f7;
  color: #1d1d1f;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const CollectionListButton = styled.button`
  max-height: 40px;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  color: #f5f5f7;
  background-color: #1d1d1f;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

export const Button = styled.button<ButtonProps>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  z-index: 10;
  background-color: #f5f5f7;
  color: #1d1d1f;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const ButtonClose = styled.button`
  border: none;
  background-color: transparent;
  color: #f5f5f7;
  &:hover {
    cursor: pointer;
  }
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  > h2 {
    font-size: 1.25rem;
    font-weight: 700;
  }
`

export const ContentCollectionInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  > li {
    border: 1px solid #dedede;
    padding: 0.5rem;
  }
`

export const LabelGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
export const BulkContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  overflow: auto;
  max-height: 300px;
`
export const BulkGroup = styled.div`
  display: flex;
  items-align: center;
  gap: 0.5rem;
`

export const LabelCheckbox = styled.label`
  display: flex;
  items-align: center;
  gap: 0.5rem;
  > input {
    width: 20px;
    height: 20px;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #dedede;
  border-radius: 0.5rem;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`

export const InputBulk = styled.input`
  width: 50%;
  padding: 0.5rem;
  border: 1px solid #dedede;
  border-radius: 0.5rem;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`

interface divProps {
  con?: boolean | undefined
}

export const MaxLength = styled.div<divProps>`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: ${(props) => (props.con ? 'red' : '#f5f5f7')};
  margin-top: 0.5rem;
`

export const ContentCollectionGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ContentCollectionDetailGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CollectionGroup = styled.div`
  position: relative;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.5rem;
  border: 1px solid #dedede;
  > a {
    display: flex;
    align-items: start;
    width: 100%;
    > img {
      border-radius: 0.5rem 0 0 0.5rem;
    }
    > div {
      width: 50%;
      overflow: hidden;
      padding: 1rem;
      > h2 {
        word-wrap: break-word;
      }
    }
  }
`

export const CollectionListBanner = styled.img`
  width: 50%;
  height: 200px;
  object-fit: cover;
  border-radius: 0.5rem 0 0 0.5rem;
`

export const CollectionDetailBanner = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 0.5rem;
`
export const CollectionButtonGroup = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`
export const CollectionButton = styled.button<ButtonProps>`
  max-height: 40px;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  color: ${(props) => props.cc};
  background-color: ${(props) => props.cbc};
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const CollectionDetailButton = styled.button<ButtonProps>`
  postion: absolute;
  top: 1rem;
  right: 1rem;
  max-height: 40px;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  color: ${(props) => props.cc};
  background-color: ${(props) => props.cbc};
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const CollectionDetailEditNameGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const CollectionDetailGroup = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
