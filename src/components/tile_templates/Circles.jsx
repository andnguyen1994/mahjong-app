import React, { Component } from 'react'
import styled from 'styled-components'

const CircleTile = styled.div`
  color: blue;
  font-size: 16px;
  font-weight: bold;
`

const Circles = props => {
  const value = props.value
  const createCircles = () => {
    let ans = ''
    for (let i = 0; i < value; i++) {
      ans += 'O'
    }
    return ans
  }
  return <CircleTile>{createCircles()}</CircleTile>
}

export default Circles
