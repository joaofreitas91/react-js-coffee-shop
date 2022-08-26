import coffee from '../../assets/coffee-cup.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Container, Content, ImageContainer, List, ListItem } from './styles'

export const Hero = () => {
  return (
    <Container>
      <Content>
        <h1>Encontre o café perfeito</h1>
        <h1>para qualquer hora do dia</h1>
        <h2>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h2>
        <List>
          <ListItem variant="yellow-dark">
            <div>
              <ShoppingCart size={16} weight="fill" />
            </div>
            Compra simples e segura
          </ListItem>

          <ListItem variant="base-text">
            <div>
              <Package size={16} weight="fill" />
            </div>
            Embalagem mantém o café intacto
          </ListItem>
          <ListItem variant="yellow">
            <div>
              <Timer size={16} weight="fill" />
            </div>
            Entrega rápida e rastreada
          </ListItem>
          <ListItem variant="purple">
            <div>
              <Coffee size={16} weight="fill" />
            </div>
            O café chega fresquinho até você
          </ListItem>
        </List>
      </Content>
      <ImageContainer>
        <img src={coffee} alt="Copo de café" />
      </ImageContainer>
    </Container>
  )
}
