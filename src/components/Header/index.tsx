import logo from '../../assets/images/logo.svg'

import { Link } from 'react-router-dom'

import {
  HeaderContainer,
  LogoContainer,
  ActionsContainer,
  LocationContainer,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { defaultTheme } from '../../styles/theme/default'

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={logo} alt="logo" />
      </LogoContainer>
      <ActionsContainer>
        <LocationContainer>
          <MapPin weight="fill" color={defaultTheme.colors.purple} />
          <span>Porto Alegre, RS</span>
        </LocationContainer>
        <Link to="/checkout" title="checkout">
          <ShoppingCart size={22} weight="fill" />
          <span>3</span>
        </Link>
      </ActionsContainer>
    </HeaderContainer>
  )
}
