import React, { Component } from 'react'
import styled from 'styled-components'

const StickTile = styled.div`
  color: green;
  font-size: 16px;
  font-weight: bold;
`

const Sticks = props => {
  const value = props.value
  const createSticks = () => {
    let ans = ''
    for (let i = 0; i < value; i++) {
      ans += '|'
    }
    return ans
  }
  return <StickTile>{createSticks()}</StickTile>
}

export default Sticks
