import { ActionsTypes } from './actions'

export interface Coffee {
  id: number
  picture: string
  types: string[]
  title: string
  description: string
  price: number
  quantity: number
}

export interface StateCoffee {
  catalog: Coffee[]
  cart: Coffee[]
}

interface Actions {
  type: string
  payload?: Coffee
}

export function coffeesReducer(state: StateCoffee, action: Actions) {
  switch (action.type) {
    case ActionsTypes.DECREMENT_COFFEE: {
      return {
        ...state,
        catalog: state.catalog.map((coffee) => {
          if (coffee.id === action.payload?.id && coffee.quantity > 1) {
            return { ...coffee, quantity: coffee.quantity - 1 }
          }
          return coffee
        }),
      }
    }

    case ActionsTypes.INCREMENT_COFFEE: {
      return {
        ...state,
        catalog: state.catalog.map((coffee) => {
          if (coffee.id === action.payload?.id) {
            return { ...coffee, quantity: coffee.quantity + 1 }
          }
          return coffee
        }),
      }
    }

    case ActionsTypes.ADD_TO_CART: {
      const hasCoffee = state.cart.some(
        (coffee) => coffee.id === action.payload?.id,
      )

      if (hasCoffee) {
        return {
          ...state,
          cart: state.cart.map((coffee) => {
            if (coffee.id === action.payload?.id) {
              return {
                ...coffee,
                quantity: coffee.quantity + action.payload?.quantity,
              }
            }
            return coffee
          }),
        }
      }

      return {
        ...state,
        cart: [...state.cart, action.payload],
      }
    }

    case ActionsTypes.INCREMENT_COFFEE_TO_CART: {
      return {
        ...state,
        cart: state.cart.map((coffee) => {
          if (coffee.id === action.payload?.id) {
            return { ...coffee, quantity: coffee.quantity + 1 }
          }
          return coffee
        }),
      }
    }
    case ActionsTypes.DECREMENT_COFFEE_TO_CART: {
      return {
        ...state,
        cart: state.cart.map((coffee) => {
          if (coffee.id === action.payload?.id && coffee.quantity > 1) {
            return { ...coffee, quantity: coffee.quantity - 1 }
          }
          return coffee
        }),
      }
    }

    case ActionsTypes.REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((coffee) => coffee.id !== action.payload?.id),
      }
    }

    case ActionsTypes.CLEAR_CART: {
      return {
        ...state,
        cart: [],
      }
    }

    default:
      return state
  }
}
