import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PostHeader = styled.div`
  background: ${(props) => props.theme['blue-500']};
  height: 13.25rem;
  width: 100%;
  max-width: 864px;
  padding: 2rem 3rem 2.5rem;

  margin: -5.5rem auto 0;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .header {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme['blue-300']};
    text-transform: uppercase;
    font-size: 0.75rem;

    div {
      display: flex;
      align-items: center;
      gap: 10px;

      a {
        text-decoration: none;
        color: ${(props) => props.theme['blue-300']};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
    }
  }
`

export const LinksFooter = styled.div`
  display: flex;
  gap: 2.2rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    color: ${(props) => props.theme['gray-500']};
  }
`

export const Main = styled.main`
  padding: 1rem 2rem;
  max-width: 864px;
  margin-top: 1.5rem;
  line-height: 1.7rem;
`
