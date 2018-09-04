import React from 'react'
import styled from 'styled-components'
import Circles from 'components/tile_templates/Circles'
import Sticks from 'components/tile_templates/Sticks'
import Symbols from 'components/tile_templates/Symbols'
import Honor from 'components/tile_templates/Honor'

const TileRender = styled.div`
  border: 1px solid red;
  height: 100%;
`

const Tile = props => {
  const { suit, value } = props
  const Element = () => {
    switch (suit) {
      case 0:
        return <Sticks value={value} />
      case 1:
        return <Symbols value={value} />
      case 2:
        return <Circles value={value} />
      case 3:
        return <Honor value={value} />
    }
  }

  return <TileRender>{Element()}</TileRender>
}

export default Tile
