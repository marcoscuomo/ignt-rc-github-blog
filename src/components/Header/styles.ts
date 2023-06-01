import { styled } from 'styled-components'
import cover from '../../assets/cover.svg'

export const HeaderContent = styled.header`
  width: 100%;
  height: 296px;
  background-image: url(${cover});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 3.5rem;
  }
`
