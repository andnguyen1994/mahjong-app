const initialState = {
  board: [],
  playedTiles: [],
  players: [],
  playerNumber: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALIZE_GAME':
      return {
        ...state,
        board: action.payload.board,
        playedTiles: action.payload.playedTiles,
        players: action.payload.players
      }
    case 'PLAYED_TILE':
      let playerHands = state.players.slice()
      playerHands = playerHands.splice(
        state.playerNumber,
        1,
        action.payload.playerHand
      )
      return {
        ...state,
        playedTiles: state.playedTiles.concat(action.payload.playedTile),
        players: playerHands
      }
    case 'SET':
      playerHands = state.players.slice(0, 4)
      playerHands[state.playerNumber] = action.payload.playerHand
      console.log(playerHands)
      return {
        ...state,
        board: action.payload.board,
        players: playerHands
      }

    default:
      return state
  }
}

export default reducer
