import { HeaderContent } from './styles'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderContent>
      <Link to={`/`}>
        <img src={logo} alt="logo" />
      </Link>
    </HeaderContent>
  )
}
