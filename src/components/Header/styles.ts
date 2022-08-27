import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 2rem 1rem;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85px;
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme.colors['yellow-dark']};
    background: ${({ theme }) => theme.colors['yellow-light']};
    padding: 0.5rem;
    border-radius: 0.375rem;

    text-decoration: none;
    position: relative;

    span {
      position: absolute;
      top: -8px;
      right: -8px;

      display: flex;
      justify-content: center;
      align-items: center;

      height: 20px;
      width: 20px;

      border-radius: 50%;

      font-size: 0.75rem;
      font-weight: 700;

      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors['yellow-dark']};
    }
  }
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  background: ${({ theme }) => theme.colors['purple-light']};
  color: ${({ theme }) => theme.colors.purple};

  span {
    color: ${({ theme }) => theme.colors['purple-dark']};
  }
`
