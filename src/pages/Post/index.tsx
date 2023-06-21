import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import moment from '../../config/moment'
import { Container, LinksFooter, Main, PostHeader } from './styles'
import { Header } from '../../components/Header'
import IconBack from '../../assets/icon-back.svg'
import IconAnchor from '../../assets/anchor.svg'
import IconGithub from '../../assets/icon-github.svg'
import IconCalender from '../../assets/icon-calender.svg'
import IconComment from '../../assets/icon-comments.svg'
import { api } from '../../lib/axios'

interface IUser {
  login: string
}

interface IIssue {
  html_url: string
  title: string
  comments: number
  created_at: Date
  body: string
  user: IUser
}

export const Post = () => {
  const { issueNumber } = useParams()
  const [issue, setIssue] = useState<IIssue>()

  useEffect(() => {
    const fetchIssue = async () => {
      const response = await api.get(
        `https://api.github.com/repos/marcoscuomo/ignt-rc-github-blog/issues/${issueNumber}`,
      )
      setIssue(response.data)
    }
    fetchIssue()
  }, [issueNumber])

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
            <a href={issue?.html_url} target="_blank" rel="noreferrer">
              <span>Ver no Github</span>{' '}
              <img src={IconAnchor} alt="See Github" />
            </a>
          </div>
        </header>
        <h1>{issue?.title}</h1>
        <LinksFooter>
          <div>
            <img src={IconGithub} alt="Github" />{' '}
            <span>{issue?.user.login}</span>
          </div>
          <div>
            <img src={IconCalender} alt="Github" />{' '}
            <span>
              {issue
                ? moment(new Date(issue.created_at).getTime()).fromNow()
                : ''}
            </span>
          </div>
          <div>
            <img src={IconComment} alt="Github" />{' '}
            <span>{issue?.comments} comentários</span>
          </div>
        </LinksFooter>
      </PostHeader>
      <Main>
        <p>{issue?.body}</p>
      </Main>
    </Container>
  )
}
