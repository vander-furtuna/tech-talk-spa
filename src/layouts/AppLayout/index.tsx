import { Outlet } from 'react-router-dom'

import logoImage from '../../assets/logo.png'
import { Header, LayoutContainer } from './styles'

export function AppLayout() {
  return (
    <LayoutContainer>
      <Header>
        <span>Tech Talk / SPA</span>
        <img src={logoImage} alt="Logo Vander Dev" />
      </Header>
      <Outlet />
    </LayoutContainer>
  )
}
