import { styled } from 'styled-components'

export const SearchContainer = styled.div`
  width: 100%;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;

  input {
    height: 50px;
    background: ${(props) => props.theme['blue-700']};
    border: solid 1px ${(props) => props.theme['blue-400']};
    border-radius: 6px;
    padding: 1rem;
    color: ${(props) => props.theme['gray-300']};
  }

  input::placeholder {
    color: ${(props) => props.theme['gray-400']};
  }
`

export const HeanderSearch = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;

  h3 {
    color: ${(props) => props.theme['gray-200']};
    font-weight: bold;
  }

  span {
    color: ${(props) => props.theme['gray-500']};
  }
`
