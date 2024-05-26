import { Link } from '../../components/Link'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <h1>Dashboard</h1>
      <Link to="me">Meu Perfil</Link>
    </HomeContainer>
  )
}
