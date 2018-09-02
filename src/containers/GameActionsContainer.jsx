import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTile } from 'actions/index'
import GameActions from 'components/GameActions'
import { mahjong } from 'scripts/mahjong'

const mapStateToProps = state => {
  return {
    board: state.gameState.board,
    playedTiles: state.gameState.playedTiles,
    hand: state.gameState.players
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTile: (board, hand) => dispatch(getTile('DRAW', board, hand))
  }
}

class GameActionContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  handleDraw = e => {
    e.preventDefault()
    if (this.props.hand[0].length >= 14) {
      console.log('your hand is full!')
    } else {
      this.props.getTile(this.props.board, this.props.hand[0])
    }
  }

  handleMahjong = e => {
    e.preventDefault()
    if (mahjong(this.props.hand[0])) {
      console.log('you win!')
    } else {
      console.log('not yet')
    }
  }

  setHand = e => {}

  render () {
    return (
      <GameActions draw={this.handleDraw} checkMahjong={this.handleMahjong} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameActionContainer)
