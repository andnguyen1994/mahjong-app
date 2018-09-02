import { sort } from 'scripts/sortHand'
import { deal } from 'scripts/deal'
import { winningHand } from 'BaseGame'

export const updateGameState = (type, board, playedTiles, players) => {
  for (let i in players) {
    players[i] = players[i].sort(sort)
  }
  return {
    type: type,
    payload: { board: board, playedTiles: playedTiles, players: players }
  }
}

export const playTile = (type, index, playerHand) => {
  let playedTile = { ...playerHand[index] }
  playerHand = playerHand.splice(index, 1)
  return {
    type: type,
    payload: { playedTile: playedTile, playerHand: playerHand }
  }
}

export const getTile = (type, board, playerHand, playedTiles, tile) => {
  if (type === 'DRAW') {
    deal(board, playerHand)
  }
  playerHand = winningHand()
  playerHand = playerHand.sort(sort)
  return {
    type: 'SET',
    payload: {
      board: board,
      playerHand: playerHand,
      playedTiles: playedTiles
    }
  }
}
