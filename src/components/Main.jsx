import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import createBoard from 'BaseGame'
import shuffle from 'scripts/randomizer'
import Board from 'containers/BoardContainer'
import Hand from 'containers/HandContainer'
import { updateGameState } from 'actions/index'
import { deal } from '../scripts/deal'

const Main = styled.div`
  display:grid;
  grid-template-rows: 1fr 7fr 1fr;
  grid-template-columns: 1fr 7fr 1fr;
  grid-template-areas:  'g1 opposite g2'
                        'left board right'
                        'g3 self g4';

  height:100vh;
`

const mapDispatchToProps = dispatch => {
  return {
    initializeGame: (board, players) =>
      dispatch(updateGameState('INITIALIZE_GAME', board, [], players))
  }
}

class Table extends Component {
  constructor (props) {
    super(props)
    this.state = {
      gameStart: false
    }
  }

  dealBoard = initialBoard => {
    let players = []
    let hand = []
    let board = initialBoard
    for (let p = 0; p < 4; p++) {
      hand = []
      for (let i = 0; i < 13; i++) {
        deal(board, hand)
      }
      players.push(hand)
    }
    return { playerHands: players, board: board }
  }

  initializeGame = async () => {
    const initialBoard = shuffle(createBoard())
    let { playerHands, board } = this.dealBoard(initialBoard)
    await this.props.initializeGame(board, playerHands)
    this.setState({ gameStart: true })
  }

  handleClick = e => {
    e.preventDefault()
    this.initializeGame()
  }

  render () {
    const gameScreen = (
      <Main>
        <Board /> <Hand />
      </Main>
    )
    return (
      <div>
        {!this.state.gameStart &&
          <button onClick={this.handleClick}>start game!</button>}
        {this.state.gameStart && gameScreen}
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Table)
