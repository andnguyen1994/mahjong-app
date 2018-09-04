import React, { Component } from 'react'
import Hand from 'components/Hand'
import { connect } from 'react-redux'
import { playTile } from 'actions/index'
import GameActions from 'containers/GameActionsContainer'

const mapStateToProps = state => {
  return {
    hand: state.gameState.players
  }
}

const mapDispatchToProps = dispatch => {
  return {
    playTile: (suit, value) => dispatch(playTile('PLAYED_TILE', suit, value))
  }
}

class SelfHandContainer extends Component {
  handleDblClick = (suit, value) => e => {
    e.preventDefault()
    this.props.playTile(suit, value)
  }

  render () {
    return (
      <React.Fragment>
        <Hand hand={this.props.hand[0]} playTile={this.handleDblClick} />
        {' '}
        <GameActions />
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelfHandContainer)
