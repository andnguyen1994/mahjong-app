import React, { Component } from 'react'
import styled from 'styled-components'

const HonorTile = styled.div`
  color: Black;
  font-size: 36px;
  font-weight: bold;
`
// TOOD: color the dragons properly
const Honor = props => {
  const suit = props.suit
  let display = ''
  console.log(suit)
  switch (suit) {
    case 3:
      display = 'Red'
      break
    case 4:
      display = 'Green'
      break
    case 5:
      display = 'White'
      break
    case 6:
      display = 'North'
      break
    case 7:
      display = 'East'
      break
    case 8:
      display = 'South'
      break
    case 9:
      display = 'West'
      break
    default:
      display = ''
      break
  }
  return <HonorTile>{display}</HonorTile>
}

export default Honor
