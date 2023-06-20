import { useContext } from 'react'

import { HeanderSearch, SearchContainer } from './styles'
import { IssuesContext } from '../../contexts/IssuesContexts'

export const SearchPublications = () => {
  const { issues, fetchIssues } = useContext(IssuesContext)

  const handleSearch = async (query: string) => {
    fetchIssues(query)
  }

  return (
    <SearchContainer>
      <HeanderSearch>
        <h3>Publicações</h3>
        <span>{issues?.total_count} publicações</span>
      </HeanderSearch>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </SearchContainer>
  )
}
