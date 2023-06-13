import { styled } from 'styled-components'

export const ContainerPost = styled.div`
  background: ${(props) => props.theme['blue-600']};
  width: 416px;
  height: 260px;
  border-radius: 10px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`

export const HeaderPost = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: start;

  h3 {
    color: ${(props) => props.theme['gray-100']};
    font-weight: 700;
    font-size: 1.2rem;
    width: 70%;
  }

  span {
    color: ${(props) => props.theme['gray-500']};
    font-weight: 400;
    font-size: 0.9rem;
  }
`

export const ContentPost = styled.p`
  a {
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 25px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    color: ${(props) => props.theme['gray-300']};
    font-size: 1rem;
  }
`
