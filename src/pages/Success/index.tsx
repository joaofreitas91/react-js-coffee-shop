import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import SuccessImage from '../../assets/images/success-delivery.png'
import { CoffeeContext } from '../../contexts/CoffeeContext'

import {
  Container,
  Content,
  IconContainer,
  List,
  MessagesContainer,
  TitleContainer,
} from './styles'

export const Success = () => {
  const { order } = useContext(CoffeeContext)

  return (
    <Container>
      <TitleContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
      </TitleContainer>
      <Content>
        <MessagesContainer className="MessagesContainer">
          <List>
            <li>
              <IconContainer variant="purple">
                <MapPin size={16} weight="fill" />
              </IconContainer>
              <div>
                <p>
                  Entrega em{' '}
                  <strong>
                    {order.street}, {order.number}
                  </strong>
                </p>
                <p>
                  {order.neighborhood} - {order.city}, {order.state}
                </p>
              </div>
            </li>
            <li>
              <IconContainer variant="yellow">
                <Timer size={16} weight="fill" />
              </IconContainer>
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </li>
            <li>
              <IconContainer variant="yellow-dark">
                <CurrencyDollar size={16} weight="fill" />
              </IconContainer>
              <div>
                <p>Pagamento na entrega</p>
                <strong>{order.paymentMethod}</strong>
              </div>
            </li>
          </List>
        </MessagesContainer>
        <div>
          <img src={SuccessImage} alt="Success" />
        </div>
      </Content>
    </Container>
  )
}
