import { Header } from '../../components/Header'
import { Posts } from '../../components/Posts'
import { Profile } from '../../components/Profile'
import { SearchPublications } from '../../components/SearchPublications'
import { Container, Main } from './styles'

export function Blog() {
  return (
    <Container>
      <Header />
      <Main>
        <Profile />
        <SearchPublications />
        <Posts />
      </Main>
    </Container>
  )
}
