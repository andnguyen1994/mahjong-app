export const deal = (board, hand) => {
  let index = Math.floor(Math.random() * board.length)
  hand.push(board[index])
  board.splice(index, 1)
}
