import React from 'react'
import styled from 'styled-components'

const ActionCenter = styled.div`
  grid-area: g4;
`

const GameActions = props => {
  const { draw, pung, checkMahjong } = props
  return (
    <ActionCenter>
      <button onClick={draw}>draw</button>
      <button onClick={pung}>pung</button>
      <button>chow</button>
      <button>kong</button>
      <button onClick={checkMahjong}>mahjong!</button>
    </ActionCenter>
  )
}

export default GameActions
