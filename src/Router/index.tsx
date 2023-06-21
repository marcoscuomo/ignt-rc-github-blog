import { Route, Routes } from 'react-router-dom'
import { Blog } from '../pages/blog'
import { Post } from '../pages/Post'

const Router = () => (
  <Routes>
    <Route path="/" element={<Blog />} />
    <Route path="/post">
      <Route path=":issueNumber" element={<Post />} />
    </Route>
  </Routes>
)

export { Router }
