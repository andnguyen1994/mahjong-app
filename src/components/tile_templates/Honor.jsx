import React, { Component } from 'react'
import styled from 'styled-components'

const HonorTile = styled.div`
  color: Black;
  font-size: 36px;
  font-weight: bold;
`
// TOOD: color the dragons properly
const Honor = props => {
  const value = props.value
  let display = ''
  switch (value) {
    case 1:
      display = 'Red'
      break
    case 2:
      display = 'Green'
      break
    case 3:
      display = 'White'
      break
    case 4:
      display = 'North'
      break
    case 5:
      display = 'East'
      break
    case 6:
      display = 'South'
      break
    case 7:
      display = 'West'
      break
    default:
      display = ''
      break
  }
  return <HonorTile>{display}</HonorTile>
}

export default Honor
