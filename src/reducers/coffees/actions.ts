import { Coffee } from './reducer'

export enum ActionsTypes {
  // eslint-disable-next-line no-unused-vars
  DECREMENT_COFFEE = 'DECREMENT_COFFEE',
  // eslint-disable-next-line no-unused-vars
  INCREMENT_COFFEE = 'INCREMENT_COFFEE',
  // eslint-disable-next-line no-unused-vars
  ADD_TO_CART = 'ADD_TO_CART',
  // eslint-disable-next-line no-unused-vars
  INCREMENT_COFFEE_TO_CART = 'INCREMENT_COFFEE_TO_CART',
  // eslint-disable-next-line no-unused-vars
  DECREMENT_COFFEE_TO_CART = 'DECREMENT_COFFEE_TO_CART',
  // eslint-disable-next-line no-unused-vars
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

export function decrementCoffee(coffee: Coffee) {
  return {
    type: ActionsTypes.DECREMENT_COFFEE,
    payload: coffee,
  }
}

export function incrementCoffee(coffee: Coffee) {
  return {
    type: ActionsTypes.INCREMENT_COFFEE,
    payload: coffee,
  }
}

export function addToCart(coffee: Coffee) {
  return {
    type: ActionsTypes.ADD_TO_CART,
    payload: coffee,
  }
}

export function incrementCoffeeToCart(coffee: Coffee) {
  return {
    type: ActionsTypes.INCREMENT_COFFEE_TO_CART,
    payload: coffee,
  }
}

export function decrementCoffeeToCart(coffee: Coffee) {
  return {
    type: ActionsTypes.DECREMENT_COFFEE_TO_CART,
    payload: coffee,
  }
}

export function removeFromCart(coffee: Coffee) {
  return {
    type: ActionsTypes.REMOVE_FROM_CART,
    payload: coffee,
  }
}
