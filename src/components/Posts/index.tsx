import { Post } from '../Post'
import { ContainerPosts } from './styles'

const posts = [
  {
    id: 1,
    title: 'JavaScript data types and data structures',
    createdAt: 1685582071000,
    content:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
  },
  {
    id: 2,
    title: 'React structures',
    createdAt: 1685409271000,
    content:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
  },
  {
    id: 3,
    title: 'Java programming languages',
    createdAt: 1682990071000,
    content:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
  },
  {
    id: 4,
    title: 'Node structures',
    createdAt: 1682903671000,
    content:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
  },
  {
    id: 5,
    title: 'Oracle JI',
    createdAt: 1683076471000,
    content:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
  },
  {
    id: 5,
    title: 'Mysql Server',
    createdAt: 1683162871000,
    content:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
  },
]

export function Posts() {
  return (
    <ContainerPosts>
      {posts.map((post) => (
        <Post
          key={post.id}
          content={post.content}
          title={post.title}
          createdAt={post.createdAt}
        />
      ))}
    </ContainerPosts>
  )
}
