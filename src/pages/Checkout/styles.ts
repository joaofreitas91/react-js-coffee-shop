import styled, { css } from 'styled-components'

import { ThemeType } from '../../styles/theme/default'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  margin: 2.5rem 1rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 2.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme.colors['base-card']};
`

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 130%;

  margin-bottom: 1rem;
`

interface SubtitleContainerProps {
  variant?: ThemeType
}

export const SubtitleContainer = styled.div<SubtitleContainerProps>`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme.colors[props.variant || 'base-label']};
  }
`

export const Subtitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme.colors['base-subtitle']};
`

export const Text = styled.span`
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme.colors['base-text']};
`

export const InputContainers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const InputContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

interface InputProps {
  width?: 'small' | 'medium'
  inputError?: boolean | undefined
}

const sizes = {
  small: '3.75rem',
  medium: '12.5rem',
}

export const Input = styled.input<InputProps>`
  font-size: 1rem;
  background: ${(props) => props.theme.colors['base-input']};

  border: 1px solid transparent;
  border-radius: 4px;
  outline: none;

  padding: 0.75rem;
  width: ${(props) => (props.width ? sizes[props.width] : '100%')};

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.yellow};
  }

  ${(props) =>
    props.inputError &&
    css`
      border: 1px solid red;

      &:focus {
        border: 1px solid red;
      }
    `}
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 2.5rem;
  margin-top: 1rem;
  border-radius: 6px;

  background: ${(props) => props.theme.colors['base-card']};
`

export const PaymentMethod = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    flex: 1;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 6px;

    font-size: 0.75rem;
    background: ${(props) => props.theme.colors['base-button']};

    cursor: pointer;

    svg {
      color: ${(props) => props.theme.colors.purple};
    }

    @media (max-width: 600px) {
      flex: 1;
    }
  }

  label:hover {
    color: ${(props) => props.theme.colors['base-subtitle']};
    background: ${(props) => props.theme.colors['base-hover']};
  }

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + label {
    border: 1px solid ${(props) => props.theme.colors.purple};
    color: ${(props) => props.theme.colors['base-text']};
    background: ${(props) => props.theme.colors['purple-light']};
  }
`
export const OrderContainer = styled.div`
  padding: 2rem;
  border-radius: 6px 44px;
  background-color: ${(props) => props.theme.colors['base-card']};
`

export const ResumeContainer = styled.div`
  flex: 1;
`

export const OrderList = styled.ul`
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 1rem;
`

export const OrderItemList = styled.li`
  display: flex;
  width: 100%;
  padding-bottom: 1.5rem;
  padding-right: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};
`

export const ImageContainer = styled.div`
  width: 64px;
  margin-right: 1.25rem;
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  margin-top: 0.5rem;
`

export const ActionsCard = styled.div`
  display: flex;
  align-items: center;

  background: ${(props) => props.theme.colors['base-button']};
  border-radius: 6px;

  p {
    color: ${(props) => props.theme.colors['base-title']};
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    background: transparent;
    color: ${(props) => props.theme.colors.purple};

    padding: 0.5rem;
    border: none;
    border-radius: 0.5rem;

    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors['purple-dark']};
    }
  }
`

export const RemoveItemButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  background: ${(props) => props.theme.colors['base-button']};
  color: ${(props) => props.theme.colors['base-text']};
  font-size: 0.75rem;

  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;

  cursor: pointer;

  svg {
    color: ${(props) => props.theme.colors.purple};
  }

  &:hover {
    color: ${(props) => props.theme.colors['purple-dark']};
  }
`

export const OderPrice = styled.strong`
  flex: 1;
  text-align: end;
  font-size: 1rem;
  margin-left: 3.125rem;
  color: ${(props) => props.theme.colors['base-text']};
`

export const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const OrderDetails = styled.div`
  display: flex;
  justify-content: space-between;
`

interface OrderDetailsProps {
  variant: 'small' | 'medium' | 'large'
}

export const OrderDetailsText = styled.span<OrderDetailsProps>`
  ${(props) => {
    switch (props.variant) {
      case 'small':
        return css`
          font-size: 0.875rem;
        `
      case 'medium':
        return css`
          font-size: 1rem;
        `
      case 'large':
        return css`
          font-size: 1.25rem;
          font-weight: 700;
        `
    }
  }};
`

export const ButtonConfirm = styled.button`
  width: 100%;
  padding: 0.75rem 0;
  margin-top: 1.5rem;
  border: none;
  border-radius: 4px;

  font-size: 0.875rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.yellow};

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors['yellow-dark']};
  }
`
