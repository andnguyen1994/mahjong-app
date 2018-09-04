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
  const displayHand = hand => {
    let display = []
    let index = 0
    for (let i = 0; i < hand.length; i++) {
      let suit = Math.floor(i / 9)
      let value = i + 1 - suit * 9
      for (let j = 0; j < hand[i]; j++) {
        display.push(
          <HandTile key={index} onDoubleClick={playTile(suit, value)}>
            <Tile suit={(suit = suit)} value={value} />
          </HandTile>
        )
        index++
      }
    }
    return display
  }
  return <TileRack>{displayHand(hand)}</TileRack>
}

export default Hand
