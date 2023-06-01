import { styled } from 'styled-components'

export const ProfileContent = styled.div`
  background: ${(props) => props.theme['blue-500']};
  height: 13.25rem;
  width: 80%;
  max-width: 864px;
  padding: 2rem 3rem;

  margin: -5.5rem auto;
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

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ProfileTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font: 700 1.8rem Nunito, sans-serif;
  }

  div {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 0.3rem;
    width: 5.4rem;
    color: ${(props) => props.theme['blue-300']};

    span {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.8rem;
    }

    a {
      color: inherit;
    }
  }
`

export const ProfileAbout = styled.div`
  margin-top: 0.8rem;
`

export const ProfileFooter = styled.footer`
  margin-top: 1rem;

  display: flex;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`
