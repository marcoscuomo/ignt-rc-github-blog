import { Link } from 'react-router-dom'
import moment from '../../config/moment'
import { ContainerPost, ContentPost, HeaderPost } from './styles'

interface PostProps {
  title: string
  createdAt: Date
  content: string
}

export function Post({ title, createdAt, content }: PostProps) {
  return (
    <ContainerPost>
      <HeaderPost>
        <h3>{title}</h3>
        <span>{moment(new Date(createdAt).getTime()).fromNow()}</span>
      </HeaderPost>
      <ContentPost>
        <Link to="/post/test">{content}</Link>
      </ContentPost>
    </ContainerPost>
  )
}
