import styled from 'styled-components'
import { ThemeType } from '../../styles/theme/default'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  margin: 0 0.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const Content = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme.colors['base-title']};
  }

  h2 {
    width: 90%;
    margin-top: 1rem;

    font-size: 1.25rem;
    font-weight: 400;
    font-stretch: 1;
    line-height: 130%;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;

  margin-top: 4.125rem;
`
interface ListItemProps {
  variant: ThemeType
}

export const ListItem = styled.li<ListItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;

    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors[props.variant]};
    border-radius: 50%;
  }
`

export const ImageContainer = styled.div`
  max-width: 476px;
`
