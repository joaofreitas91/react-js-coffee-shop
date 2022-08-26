import logo from '../../assets/logo.svg'

import { Link } from 'react-router-dom'

import { HeaderContainer, LogoContainer, ActionsContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { defaultTheme } from '../../styles/theme/default'

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={logo} alt="logo" />
      </LogoContainer>
      <ActionsContainer>
        <div>
          <MapPin weight="fill" color={defaultTheme.colors.purple} />
          Porto Alegre, RS
        </div>
        <Link to="/checkout" title="checkout">
          <ShoppingCart
            size={22}
            weight="fill"
            color={defaultTheme.colors['yellow-dark']}
          />
          <span>3</span>
        </Link>
      </ActionsContainer>
    </HeaderContainer>
  )
}
