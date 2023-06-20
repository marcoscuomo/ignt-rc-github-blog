import { useContext } from 'react'
import { Post } from '../Post'
import { ContainerPosts } from './styles'
import { IssuesContext } from '../../contexts/IssuesContexts'

export function Posts() {
  const { issues } = useContext(IssuesContext)

  return (
    <ContainerPosts>
      {issues?.items.map((issue) => (
        <Post
          key={issue.id}
          content={issue.body}
          title={issue.title}
          createdAt={issue.created_at}
        />
      ))}
    </ContainerPosts>
  )
}
