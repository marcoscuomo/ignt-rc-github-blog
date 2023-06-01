import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { SearchPublications } from '../../components/SearchPublications'
import { Container, Content } from './styles'

export function Blog() {
  return (
    <Container>
      <Header />
      <Content>
        <Profile />
        <SearchPublications />
      </Content>
    </Container>
  )
}
