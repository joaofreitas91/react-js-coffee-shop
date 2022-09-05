import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import {
  Container,
  Form,
  Title,
  Subtitle,
  SubtitleContainer,
  Text,
  Input,
  InputContainer,
  InputContainers,
  PaymentContainer,
  PaymentMethod,
  OrderContainer,
  OrderItemList,
  ImageContainer,
  ActionsCard,
  ActionsContainer,
  RemoveItemButton,
  OderPrice,
  OrderDetails,
  OrderDetailsContainer,
  OrderDetailsText,
  ButtonConfirm,
  OrderList,
} from './styles'

export const DeliveryFee = 3.5

export const Checkout = () => {
  const {
    cart,
    handleDecrementCoffeeToCart,
    handleIncrementCoffeeToCart,
    handleRemoveFromCart,
  } = useContext(CoffeeContext)

  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  return (
    <Container>
      <div>
        <Title>Complete seu pedido</Title>
        <Form action="#" id="coffeeForm">
          <SubtitleContainer variant="yellow-dark">
            <MapPinLine size={22} />
            <div>
              <Subtitle>Endereço de Entrega</Subtitle>
              <Text>Informe o endereço onde deseja receber seu pedido</Text>
            </div>
          </SubtitleContainer>
          <InputContainers>
            <InputContainer>
              <Input width="medium" type="text" placeholder="CEP" />
            </InputContainer>
            <InputContainer>
              <Input type="text" placeholder="Rua" />
            </InputContainer>
            <InputContainer>
              <Input width="medium" type="text" placeholder="Número" />
              <Input placeholder="Complemento" />
            </InputContainer>
            <InputContainer>
              <Input width="medium" type="text" placeholder="Bairro" />
              <Input type="text" placeholder="Cidade" />
              <Input width="small" type="text" placeholder="UF" />
            </InputContainer>
          </InputContainers>
        </Form>
        <PaymentContainer>
          <Title>Pagamento</Title>
          <SubtitleContainer variant="purple">
            <CurrencyDollar size={22} />
            <div>
              <Subtitle>Pagamento</Subtitle>
              <Text>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </Text>
            </div>
          </SubtitleContainer>
          <PaymentMethod>
            <input type="radio" name="payment" id="credit" form="coffeeForm" />
            <label htmlFor="credit">
              <CreditCard size={22} />
              CARTÃO DE CRÉDITO
            </label>

            <input type="radio" name="payment" id="debit" form="coffeeForm" />
            <label htmlFor="debit">
              <Bank size={22} />
              CARTÃO DE DÉBITO
            </label>

            <input type="radio" name="payment" id="cash" form="coffeeForm" />
            <label htmlFor="cash">
              <Money size={22} />
              DINHEIRO
            </label>
          </PaymentMethod>
        </PaymentContainer>
      </div>
      <div>
        <Title>Cafés Selecionados</Title>
        <OrderContainer>
          <OrderList>
            {cart.map((coffee) => (
              <OrderItemList key={coffee.id}>
                <ImageContainer>
                  <img src={coffee.picture} alt={coffee.title} />
                </ImageContainer>
                <div>
                  <span>{coffee.title}</span>
                  <ActionsContainer>
                    <ActionsCard>
                      <button
                        onClick={() => handleDecrementCoffeeToCart(coffee)}
                      >
                        <Minus weight="bold" />
                      </button>
                      <p>{coffee.quantity}</p>
                      <button
                        onClick={() => handleIncrementCoffeeToCart(coffee)}
                      >
                        <Plus weight="bold" />
                      </button>
                    </ActionsCard>
                    <RemoveItemButton
                      onClick={() => handleRemoveFromCart(coffee)}
                    >
                      <Trash size={16} />
                      REMOVER
                    </RemoveItemButton>
                  </ActionsContainer>
                </div>
                <OderPrice>
                  {(coffee.price * coffee.quantity).toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </OderPrice>
              </OrderItemList>
            ))}
          </OrderList>
          <OrderDetailsContainer>
            <OrderDetails>
              <OrderDetailsText variant="small">
                Total de itens
              </OrderDetailsText>
              <OrderDetailsText variant="medium">
                {total.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </OrderDetailsText>
            </OrderDetails>
            <OrderDetails>
              <OrderDetailsText variant="small">Entrega</OrderDetailsText>
              <OrderDetailsText variant="medium">
                {DeliveryFee.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </OrderDetailsText>
            </OrderDetails>
            <OrderDetails>
              <OrderDetailsText variant="large">Total</OrderDetailsText>
              <OrderDetailsText variant="large">
                {(total + DeliveryFee).toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </OrderDetailsText>
            </OrderDetails>
          </OrderDetailsContainer>
          <ButtonConfirm type="submit" form="coffeeForm">
            Confirmar Pedido
          </ButtonConfirm>
        </OrderContainer>
      </div>
    </Container>
  )
}
