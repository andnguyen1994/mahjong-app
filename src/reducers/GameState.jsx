import { winningHand } from 'BaseGame'

const initialState = {
  board: [],
  playedTiles: [],
  players: [[], [], [], []],
  sets: [[], [], [], []],
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
      let players = state.players.slice()
      players[state.playerNumber][
        action.payload.suit * 9 - 1 + action.payload.value
      ]--
      return {
        ...state,
        playedTiles: state.playedTiles.concat(action.payload.playedTile),
        players: players
      }
    case 'DRAW':
      players = state.players.slice()
      players[state.playerNumber][
        action.payload.suit * 9 - 1 + action.payload.value
      ]++
      // players[state.playerNumber] = winningHand()
      return {
        ...state,
        board: [...state.board.slice(0, state.board.length)],
        players: players
      }
    case 'PUNG':
      players = state.players.slice()
      players[state.playerNumber][
        action.payload.suit * 9 - 1 + action.payload.value
      ] = 0

      let sets = state.sets.slice()
      sets[state.playerNumber].push({
        type: 'P',
        suit: action.payload.suit,
        value: action.payload.value
      })

      let playedTiles = state.playedTiles.slice()
      // playedTiles.splice(playedTiles.length - 1, 1)
      console.log(playedTiles)
      return {
        ...state,
        players: players,
        sets: sets,
        playedTiles: playedTiles
      }
    default:
      return state
  }
}

export default reducer
