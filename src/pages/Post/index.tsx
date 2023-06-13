// import { useParams } from 'react-router-dom'
import { Container, LinksFooter, Main, PostHeader } from './styles'
import { Header } from '../../components/Header'
import IconBack from '../../assets/icon-back.svg'
import IconAnchor from '../../assets/anchor.svg'
import IconGithub from '../../assets/icon-github.svg'
import IconCalender from '../../assets/icon-calender.svg'
import IconComment from '../../assets/icon-comments.svg'
import { Link } from 'react-router-dom'

export const Post = () => {
  // const { slug } = useParams()
  return (
    <Container>
      <Header />
      <PostHeader>
        <header className="header">
          <div>
            {' '}
            <Link to="/">
              <img src={IconBack} alt="Icon back" /> <span>Voltar</span>
            </Link>
          </div>
          <div>
            <a href="#" target="_blank">
              <span>Ver no Github</span>{' '}
              <img src={IconAnchor} alt="See Github" />
            </a>
          </div>
        </header>
        <h1>JavaScript data types and data structures</h1>
        <LinksFooter>
          <div>
            <img src={IconGithub} alt="Github" /> <span>cameronwll</span>
          </div>
          <div>
            <img src={IconCalender} alt="Github" /> <span>Há 1 dia</span>
          </div>
          <div>
            <img src={IconComment} alt="Github" /> <span>5 comentários</span>
          </div>
        </LinksFooter>
      </PostHeader>
      <Main>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
      </Main>
    </Container>
  )
}
