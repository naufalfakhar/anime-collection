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
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 50%);
  z-index: 100;
  > div {
    width: 320px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 1.5rem;
    border-radius: 1rem;
    background-color: #212121;
  }
`
// Region Layout End

interface CustomProps extends React.HTMLProps<HTMLButtonElement> {
  condition?: boolean
  'desktop-padding-left'?: string
  'desktop-padding-right'?: string
  'custom-color'?: string
  'custom-background-color'?: string
}

export const Header = styled.header<CustomProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1024px) {
    padding-left: ${(props) => props['desktop-padding-left'] ?? '0'};
    padding-right: ${(props) => props['desktop-padding-right'] ?? '0'};
  }
`

export const PageTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  @media (min-width: 1024px) {
    font-size: 32px;
  }
`

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const IconButton = styled.button<CustomProps>`
  max-width: 40px;
  max-height: 40px;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  color: ${(props) => props['custom-color'] ?? '#52525b'};
  background-color: ${(props) => props['custom-background-color'] ?? '#f5f5f7'};
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
    border-radius: 1rem;
    overflow: hidden;
  }
`

export const CardLoading = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 230px;
  border-radius: 0.5rem;
  background-color: #334155;
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
`

export const CardOverlay = styled.div`
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
    rgba(29, 29, 31, 1) 20%,
    rgba(29, 29, 31, 0.5) 40%,
    rgba(29, 29, 31, 0) 80%
  );
`

export const CardTitle = styled.h2`
  font-size: 14px;
  text-align: start;
  @media (min-width: 1024px) {
    font-size: 20px;
  }
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
    padding: 6px 8px;
  }
`

export const PaginationGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  font-size: 14px;
`

export const PaginationButton = styled.button<CustomProps>`
  width: 30px;
  height: 30px;
  border: none;
  background-color: ${(props) => (props.condition ? '#94a3b8' : '#f5f5f7')};
  color: ${(props) => (props.condition ? '#f5f5f7' : '#1d1d1f')};
  &:hover {
    cursor: ${(props) => (props.condition ? 'normal' : 'pointer')};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  text-transform: capitalize;
  > p {
    font-size: 14px;
    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.5rem;
`

export const TextOverflow = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Button = styled.button<CustomProps>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  z-index: 10;
  color: ${(props) => props['custom-color'] ?? '#1d1d1f'};
  background-color: ${(props) => props['custom-background-color'] ?? '#51e5a1'};
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const ModalContentLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 25px;
  border-radius: 0.5rem;
  background-color: #334155;
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
`
export const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  > div {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
      to top,
      rgba(29, 29, 31, 0.8) 0%,
      rgba(29, 29, 31, 0) 90%
    );
  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`

export const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  @media (min-width: 1024px) {
    display: inline-flex;
    padding-left: 0.5rem;
  }
  > h2 {
    font-size: 10px;
    @media (min-width: 1024px) {
      font-size: 14px;
    }
  }
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
  padding-top: 200px;
  @media (min-width: 1024px) {
    padding-top: 10px;
    padding-left: 310px;
    align-items: start;
  }
`

export const AnimeDetailCoverImage = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -50px;
  width: 150px;
  height: 230px;
  object-fit: cover;
  border-radius: 1rem;
  @media (min-width: 1024px) {
    transform: translateX(0);
    width: 250px;
    height: 330px;
    left: 50px;
    top: -100px;
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

export const InfoGroup = styled.ul`
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
    text-transform: capitalize;
    font-size: 14px;
    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }
`

export const AnimeDetailGenreGroup = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 10px;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  > span {
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

export const ButtonClose = styled.button`
  border: none;
  background-color: transparent;
  color: #f5f5f7;
  &:hover {
    cursor: pointer;
  }
`

export const ContentCollectionInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  > li {
    border: 1px solid #dedede;
    padding: 0.5rem;
    > a {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`

export const GroupCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const LabelCheckbox = styled.label`
  display: flex;
  items-align: center;
  gap: 0.5rem;
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

export const MaxLength = styled.div<CustomProps>`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: ${(props) => (props.condition ? 'red' : '#f5f5f7')};
  margin-top: 0.5rem;
`

export const ContentCollectionGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CollectionGroup = styled.div`
  position: relative;
  display: flex;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #dedede;
  > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: start;
    }
    width: 100%;
    gap: 1rem;
    overflow: hidden;
    > ul {
      overflow: hidden;
      padding: 1rem;
      > h2 {
        word-wrap: break-word;
      }
    }
  }
`

export const CollectionListGroup = styled.div`
  position: relative;
  display: flex;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #dedede;
  > a {
    display: flex;
    align-items: start;
    width: 100%;
    gap: 1rem;
    overflow: hidden;
    > div {
      margin-top: 1rem;
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

export const CollectionListBanner = styled.img`
  width: 50%;
  height: 200px;
  object-fit: cover;
  border-radius: 0.5rem 0 0 0.5rem;
`

export const CollectionDetailCover = styled.img`
  object-fit: cover;
  border-radius: 0.5rem 0 0 0.5rem;
  height: 300px;
  @media (min-width: 1024px) {
    width: 25%;
  }
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

export const CollectionDetailButton = styled.button<CustomProps>`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 10;
  max-height: 40px;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  color: ${(props) => props['custom-color']};
  background-color: ${(props) => props['custom-background-color']};
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`
