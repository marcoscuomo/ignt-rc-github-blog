import { styled } from 'styled-components'

export const ProfileContent = styled.div`
  background: ${(props) => props.theme['blue-500']};
  height: 13.25rem;
  width: 80%;
  padding: 2rem 3rem;

  margin: -4rem auto;
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.2rem;
`

export const ProfileInfo = styled.div`
  /* background: red; */
  height: 100%;
  flex: 1;

  /* display: flex; */
`

export const ProfileTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font: 700 1.8rem Nunito, sans-serif;
  }
`
