import moment from '../../config/moment'
import { ContainerPost, ContentPost, HeaderPost } from './styles'

interface PostProps {
  title: string
  createdAt: number
  content: string
}

export function Post({ title, createdAt, content }: PostProps) {
  return (
    <ContainerPost>
      <HeaderPost>
        <h3>{title}</h3>
        <span>{moment(createdAt).fromNow()}</span>
      </HeaderPost>
      <ContentPost>{content}</ContentPost>
    </ContainerPost>
  )
}
