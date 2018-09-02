import React, { Component } from 'react'
import Board from 'components/Board'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    board: state.gameState.playedTiles
  }
}

class BoardContainer extends Component {
  render () {
    return <Board board={this.props.board} />
  }
}

export default connect(mapStateToProps)(BoardContainer)
