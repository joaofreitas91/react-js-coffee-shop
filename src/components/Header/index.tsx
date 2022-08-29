import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'

import {
  HeaderContainer,
  LogoContainer,
  ActionsContainer,
  LocationContainer,
} from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { defaultTheme } from '../../styles/theme/default'

export const Header = () => {
  const { cart } = useContext(CoffeeContext)
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/" title="home">
          <img src={logo} alt="logo" />
        </Link>
      </LogoContainer>
      <ActionsContainer>
        <LocationContainer>
          <MapPin weight="fill" color={defaultTheme.colors.purple} />
          <span>Porto Alegre, RS</span>
        </LocationContainer>
        <Link to="/checkout" title="checkout">
          <ShoppingCart size={22} weight="fill" />
          <span>{cart.length}</span>
        </Link>
      </ActionsContainer>
    </HeaderContainer>
  )
}
