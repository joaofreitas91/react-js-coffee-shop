import styled from 'styled-components'
import { ThemeType } from '../../styles/theme/default'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 0.5rem 0;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;

  h1 {
    font-size: 2rem;
    font-weight: 800;
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors['base-text']};
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const MessagesContainer = styled.div`
  flex: 1;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: linear-gradient(
        ${({ theme }) => theme.colors.background},
        ${({ theme }) => theme.colors.background}
      )
      padding-box,
    linear-gradient(
        to right,
        ${({ theme }) => theme.colors['yellow-dark']},
        ${({ theme }) => theme.colors['purple-dark']}
      )
      border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;

  padding: 2.5rem;
  margin: 2.5rem 0;

  li {
    display: flex;
    align-items: center;
  }

  p,
  strong {
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

interface ColorsIconProps {
  variant: ThemeType
}

export const IconContainer = styled.div<ColorsIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, variant }) => theme.colors[variant]};
  padding: 0.5rem;
  margin-right: 0.75rem;
  border-radius: 50%;

  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`
