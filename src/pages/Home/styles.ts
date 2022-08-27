import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem 5rem 1rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`
export const CardsList = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: 2rem 1rem;
  margin-top: 3.375rem;
`

export const CardContainer = styled.div`
  border-radius: 6px 36px;
  background: ${(props) => props.theme.colors['base-card']};
  width: 256px;

  img {
    width: 120px;
  }
`

export const CardContent = styled.div`
  margin: -1.25rem 1.5rem 1.25rem 1.5rem;
  text-align: center;
`

export const CardTitle = styled.h2`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;

  margin-bottom: 0.5rem;
`

export const CardDescription = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors['base-label']};

  margin-bottom: 2rem;
`

export const TypeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;

  margin: 1rem 0;

  p {
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors['yellow-dark']};
    background: ${(props) => props.theme.colors['yellow-light']};

    padding: 0.25rem 0.5rem;
    border-radius: 100px;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Price = styled.p`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 1.5rem;
  span {
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-weight: 400;
  }
`

export const ActionsCard = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;

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

export const CartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  margin-left: 0.5rem;

  font-size: 0.75rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors['purple-dark']};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.purple};
  }
`
