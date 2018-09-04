import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTile } from 'actions/index'
import GameActions from 'components/GameActions'
import { mahjong } from 'scripts/mahjong'
import { test } from 'API/api'

const mapStateToProps = state => {
  return {
    board: state.gameState.board,
    playedTiles: state.gameState.playedTiles,
    hand: state.gameState.players
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTile: (type, source) => dispatch(getTile(type, source))
  }
}

class GameActionContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  handleDraw = e => {
    e.preventDefault()
    let sum = this.props.hand[0].reduce((a, b) => a + b, 0)
    if (sum >= 14) {
      console.log('your hand is full!')
    } else {
      this.props.getTile('DRAW', this.props.board)
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

  handlePung = e => {
    e.preventDefault()
    let mostRecentTile = this.props.playedTiles[
      this.props.playedTiles.length - 1
    ]
    if (
      this.props.hand[0][mostRecentTile.suit * 9 - 1 + mostRecentTile.value] ===
      2
    ) {
      this.props.getTile('PUNG', this.props.playedTiles)
    } else {
      console.log()
    }
    test()
  }

  setHand = e => {}

  render () {
    return (
      <GameActions
        draw={this.handleDraw}
        pung={this.handlePung}
        checkMahjong={this.handleMahjong}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameActionContainer)
