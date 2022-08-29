import { createContext, ReactNode, useReducer } from 'react'

import {
  incrementCoffee,
  decrementCoffee,
  addToCart,
  removeFromCart,
} from '../reducers/coffees/actions'

import { Coffee, coffeesReducer } from '../reducers/coffees/reducer'

import espressoCoffee from '../assets/images/coffee-types/espresso-coffee.png'
import americanCoffee from '../assets/images/coffee-types/american-espresso.png'
import creamyEspresso from '../assets/images/coffee-types/creamy-espresso.png'
import coldEspresso from '../assets/images/coffee-types/cold-espresso.png'
import coffeeWithMilk from '../assets/images/coffee-types/coffee-with-milk.png'
import latte from '../assets/images/coffee-types/latte.png'
import cappuccino from '../assets/images/coffee-types/cappuccino.png'
import macchiato from '../assets/images/coffee-types/macchiato.png'
import mocaccino from '../assets/images/coffee-types/mocaccino.png'
import hotChocolate from '../assets/images/coffee-types/hot-chocolate.png'
import cuban from '../assets/images/coffee-types/cuban.png'
import hawaiian from '../assets/images/coffee-types/hawaiian.png'
import arabian from '../assets/images/coffee-types/arabian.png'
import irish from '../assets/images/coffee-types/irish.png'

const coffees = [
  {
    id: 1,
    picture: espressoCoffee,
    types: ['tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantity: 1,
  },
  {
    id: 2,
    picture: americanCoffee,
    types: ['tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    quantity: 1,
  },
  {
    id: 3,
    picture: creamyEspresso,
    types: ['tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    quantity: 1,
  },
  {
    id: 4,
    picture: coldEspresso,
    types: ['tradicional', 'gelado'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    quantity: 1,
  },
  {
    id: 5,
    picture: coffeeWithMilk,
    types: ['tradicional', 'com leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    quantity: 1,
  },
  {
    id: 6,
    picture: latte,
    types: ['tradicional', 'com leite'],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    quantity: 1,
  },
  {
    id: 7,
    picture: cappuccino,
    types: ['tradicional', 'com leite'],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    quantity: 1,
  },
  {
    id: 8,
    picture: macchiato,
    types: ['tradicional', 'com leite'],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    quantity: 1,
  },
  {
    id: 9,
    picture: mocaccino,
    types: ['tradicional', 'com leite'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    quantity: 1,
  },
  {
    id: 10,
    picture: hotChocolate,
    types: ['especial', 'com leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    quantity: 1,
  },
  {
    id: 11,
    picture: cuban,
    types: ['especial', 'alcoólico', 'gelado'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    quantity: 1,
  },
  {
    id: 12,
    picture: hawaiian,
    types: ['especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    quantity: 1,
  },
  {
    id: 13,
    picture: arabian,
    types: ['especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    quantity: 1,
  },
  {
    id: 14,
    picture: irish,
    types: ['especial', 'alcoólico'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    quantity: 1,
  },
]

interface CoffeeContextProps {
  catalog: Coffee[]
  cart: Coffee[]
  handleIncrementCoffee: (coffee: Coffee) => void
  handleDecrementCoffee: (coffee: Coffee) => void
  handleAddToCart: (coffee: Coffee) => void
  handleRemoveFromCart: (coffee: Coffee) => void
}

interface CoffeeProviderProps {
  children: ReactNode
}

export const CoffeeContext = createContext({} as CoffeeContextProps)

export const CoffeeProvider = ({ children }: CoffeeProviderProps) => {
  const [coffeesState, dispatch] = useReducer(coffeesReducer, {
    catalog: coffees,
    cart: [],
  })

  function handleDecrementCoffee(coffee: Coffee) {
    dispatch(decrementCoffee(coffee))
  }

  function handleIncrementCoffee(coffee: Coffee) {
    dispatch(incrementCoffee(coffee))
  }

  function handleAddToCart(coffee: Coffee) {
    dispatch(addToCart(coffee))
  }

  function handleRemoveFromCart(coffee: Coffee) {
    dispatch(removeFromCart(coffee))
  }

  return (
    <CoffeeContext.Provider
      value={{
        catalog: coffeesState.catalog,
        cart: coffeesState.cart,
        handleDecrementCoffee,
        handleIncrementCoffee,
        handleAddToCart,
        handleRemoveFromCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
