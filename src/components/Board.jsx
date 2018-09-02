import React from 'react'
import styled from 'styled-components'
import Tile from 'components/Tile'

const Grid = styled.div`
  grid-area: board;
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: repeat(12, 1fr);
  height:100%;
  width: 100%;
`

const Board = props => {
  const { board } = props
  const populateGrid = board.map((tile, index) => (
    <Tile key={index} suit={tile.suit} value={tile.value} />
  ))
  return <Grid>{populateGrid}</Grid>
}

export default Board
