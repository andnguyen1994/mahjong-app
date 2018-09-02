import React from 'react'
import styled from 'styled-components'
import Tile from 'components/Tile'

const TileRack = styled.div`
  grid-area: self;
  display: grid;
  grid-template-columns: repeat(14, 1fr);
`

const HandTile = styled.div`
  height: 100%;
`

const Hand = props => {
  const { hand, playTile } = props
  const displayHand = hand.map((tile, index) => (
    <HandTile key={index} onDoubleClick={playTile(index)}>
      <Tile suit={tile.suit} value={tile.value} />
    </HandTile>
  ))
  return <TileRack>{displayHand}</TileRack>
}

export default Hand
