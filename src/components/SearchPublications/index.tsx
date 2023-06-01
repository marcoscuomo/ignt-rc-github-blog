import { HeanderSearch, SearchContainer } from './styles'

export const SearchPublications = () => {
  return (
    <SearchContainer>
      <HeanderSearch>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </HeanderSearch>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchContainer>
  )
}
