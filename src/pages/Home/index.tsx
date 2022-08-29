import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

import { Hero } from '../../components/Hero'

import {
  ActionsCard,
  ActionsContainer,
  CardContainer,
  CardContent,
  CardDescription,
  CardsList,
  CardTitle,
  CartButton,
  Container,
  Price,
  TypeContainer,
} from './styles'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'

export const Home = () => {
  const {
    catalog,
    handleDecrementCoffee,
    handleIncrementCoffee,
    handleAddToCart,
  } = useContext(CoffeeContext)

  return (
    <>
      <Hero />
      <Container>
        <h1>Nossos Cafés</h1>
        <CardsList>
          {catalog.map((coffee) => (
            <CardContainer key={coffee.id}>
              <CardContent>
                <img src={coffee.picture} alt={coffee.title} />
                <TypeContainer>
                  {coffee.types.map((type) => (
                    <p key={type}>{type}</p>
                  ))}
                </TypeContainer>
                <CardTitle>{coffee.title}</CardTitle>
                <CardDescription>{coffee.description}</CardDescription>
                <ActionsContainer>
                  <Price>
                    <span>R$ </span>
                    {coffee.price.toLocaleString('pt-BR', {
                      style: 'decimal',
                      minimumFractionDigits: 2,
                    })}
                  </Price>
                  <ActionsCard>
                    <button onClick={() => handleDecrementCoffee(coffee)}>
                      <Minus weight="bold" />
                    </button>
                    <p>{coffee.quantity}</p>
                    <button onClick={() => handleIncrementCoffee(coffee)}>
                      <Plus weight="bold" />
                    </button>
                  </ActionsCard>
                  <CartButton onClick={() => handleAddToCart(coffee)}>
                    <ShoppingCart size={20} weight="fill" />
                  </CartButton>
                </ActionsContainer>
              </CardContent>
            </CardContainer>
          ))}
        </CardsList>
      </Container>
    </>
  )
}
