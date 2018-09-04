import { sort } from 'scripts/sortHand'
import { deal } from 'scripts/deal'
import { winningHand } from 'BaseGame'

export const updateGameState = (type, board, playedTiles, players) => {
  return {
    type: type,
    payload: { board: board, playedTiles: playedTiles, players: players }
  }
}

export const playTile = (type, suit, value) => {
  let playedTile = { suit: suit, value: value }
  return {
    type: type,
    payload: { playedTile: playedTile, suit: suit, value: value }
  }
}

export const getTile = (type, source) => {
  let tile = source[source.length - 1]
  return {
    type: type,
    payload: {
      source: source,
      suit: tile.suit,
      value: tile.value
    }
  }
}
