import React, { Component } from 'react'
import styled from 'styled-components'

const SymbolTile = styled.div`
  color: red;
  font-size: 36px;
  font-weight: bold;
`

const Symbols = props => {
  const value = props.value
  return <SymbolTile>{value}</SymbolTile>
}

export default Symbols
