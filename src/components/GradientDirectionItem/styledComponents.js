import styled from 'styled-components'

export const ListItem = styled.li``

export const DirectionButton = styled.button`
  font-size: 15px;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  padding-top: 9px;
  padding-bottom: 9px;
  width: 95px;
  margin: 4px;
  font-family: 'Roboto';
  background-color: #ffffff;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
`
