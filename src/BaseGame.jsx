export const winningHand = () => {
  let ans = []
  // for (let i = 0; i < suits.length; i++) {
  //   for (let j = 1; j <= 3; j++) {
  //     ans.push({ suit: suits[i], value: 1 })
  //   }
  // }
  ans.push({ suit: suits[0], value: 1 })
  ans.push({ suit: suits[0], value: 1 })
  ans.push({ suit: suits[0], value: 1 })
  ans.push({ suit: suits[1], value: 3 })
  ans.push({ suit: suits[1], value: 3 })
  ans.push({ suit: suits[1], value: 3 })
  ans.push({ suit: suits[1], value: 4 })
  ans.push({ suit: suits[1], value: 4 })
  ans.push({ suit: suits[1], value: 4 })
  ans.push({ suit: suits[4], value: -1 })
  ans.push({ suit: suits[4], value: -1 })
  ans.push({ suit: suits[4], value: -1 })
  ans.push({ suit: suits[8], value: -1 })
  ans.push({ suit: suits[8], value: -1 })
  return ans
}
export const suits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const createBoard = () => {
  let board = []
  for (let i = 0; i < 3; i++) {
    for (let s = 0; s < 3; s++) {
      for (let num in values) {
        board.push({ suit: suits[s], value: values[num] })
      }
    }
    for (let s = 3; s < suits.length; s++) {
      board.push({ suit: suits[s], value: -1 })
    }
  }
  return board
}

export default createBoard
