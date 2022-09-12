import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
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
  ResumeContainer,
} from './styles'

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

export const DeliveryFee = 3.5

const newOrderSchema = zod.object({
  cep: zod.string().min(9).max(9),
  street: zod.string().min(3),
  number: zod.number().min(1).nullable(),
  otherInformation: zod.string().optional(),
  neighborhood: zod.string().min(3),
  city: zod.string().min(3),
  state: zod.string().min(2).max(2),
  paymentMethod: zod.string().min(3),
  cpf: zod.string(),
})

export type NewOrder = zod.infer<typeof newOrderSchema>

export const Checkout = () => {
  const {
    cart,
    handleDecrementCoffeeToCart,
    handleIncrementCoffeeToCart,
    handleRemoveFromCart,
    handleClearCart,
    handleSetOrder,
  } = useContext(CoffeeContext)

  const { register, handleSubmit, formState } = useForm<NewOrder>({
    defaultValues: {
      cep: '',
      street: '',
      number: null,
      otherInformation: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentMethod: 'Cartão de Crédito',
      cpf: '',
    },
    resolver: zodResolver(newOrderSchema),
  })

  const { errors } = formState

  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  const navigate = useNavigate()

  function createNewOrder(data: NewOrder) {
    handleSetOrder({ ...data, items: cart })
    handleClearCart()
    navigate('/success')
  }

  return (
    <Container>
      <div>
        <Title>Complete seu pedido</Title>
        <Form id="coffeeForm" onSubmit={handleSubmit(createNewOrder)}>
          <SubtitleContainer variant="yellow-dark">
            <MapPinLine size={22} />
            <div>
              <Subtitle>Endereço de Entrega</Subtitle>
              <Text>Informe o endereço onde deseja receber seu pedido</Text>
            </div>
          </SubtitleContainer>
          <InputContainers>
            <InputContainer>
              <Input
                width="medium"
                placeholder="CEP"
                maxLength={9}
                inputError={!!errors.cep}
                {...register('cep', {
                  onChange: (e) => {
                    e.target.value = e.target.value
                      .replace(/\D/g, '')
                      .replace(/^(\d{5})(\d)/, '$1-$2')
                  },
                })}
              />
            </InputContainer>
            <InputContainer>
              <Input
                type="text"
                placeholder="Rua"
                maxLength={50}
                inputError={!!errors.street}
                {...register('street')}
              />
            </InputContainer>
            <InputContainer>
              <Input
                width="medium"
                type="text"
                placeholder="Número"
                maxLength={5}
                inputError={!!errors.number}
                {...register('number', {
                  valueAsNumber: true,
                  onChange: (e) =>
                    (e.target.value = e.target.value.replace(/\D/g, '')),
                })}
              />
              <Input
                maxLength={50}
                placeholder="Complemento"
                inputError={!!errors.otherInformation}
                {...register('otherInformation')}
              />
            </InputContainer>
            <InputContainer>
              <Input
                width="medium"
                type="text"
                placeholder="Bairro"
                maxLength={20}
                inputError={!!errors.neighborhood}
                {...register('neighborhood')}
              />
              <Input
                type="text"
                placeholder="Cidade"
                maxLength={20}
                inputError={!!errors.city}
                {...register('city')}
              />
              <Input
                width="small"
                type="text"
                placeholder="UF"
                maxLength={2}
                inputError={!!errors.state}
                {...register('state', {
                  onChange: (e) => {
                    e.target.value = e.target.value
                      .toUpperCase()
                      .replace(/[^A-Za-z]/g, '')
                  },
                })}
              />
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
            <input
              type="radio"
              id="credit"
              form="coffeeForm"
              value={'Cartão de Crédito'}
              {...register('paymentMethod', { required: true })}
            />
            <label htmlFor="credit">
              <CreditCard size={22} />
              CARTÃO DE CRÉDITO
            </label>

            <input
              type="radio"
              id="debit"
              value={'Cartão de Débito'}
              form="coffeeForm"
              {...register('paymentMethod', { required: true })}
            />
            <label htmlFor="debit">
              <Bank size={22} />
              CARTÃO DE DÉBITO
            </label>

            <input
              type="radio"
              form="coffeeForm"
              id="cash"
              value={'Dinheiro'}
              {...register('paymentMethod', { required: true })}
            />
            <label htmlFor="cash">
              <Money size={22} />
              DINHEIRO
            </label>
          </PaymentMethod>
        </PaymentContainer>
      </div>
      <ResumeContainer>
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
          <ButtonConfirm type="submit" form="coffeeForm" value="">
            Confirmar Pedido
          </ButtonConfirm>
        </OrderContainer>
      </ResumeContainer>
    </Container>
  )
}
