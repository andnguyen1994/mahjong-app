export const winningHand = () => {
  let ans = [
    2,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    3,
    3,
    3
  ]
  // for (let i = 0; i < suits.length; i++) {
  //   for (let j = 1; j <= 3; j++) {
  //     ans.push({ suit: suits[i], value: 1 })
  //   }
  // }
  return ans
}

export const emptyHand = [].fill(0, 0, 33)

export const suits = [0, 1, 2, 3]
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const honor = [1, 2, 3, 4, 5, 6, 7]

const createBoard = () => {
  let board = []
  for (let i = 0; i < 3; i++) {
    for (let s = 0; s < 3; s++) {
      for (let num in values) {
        board.push({ suit: suits[s], value: values[num] })
      }
    }
    for (let h = 0; h < honor.length; h++) {
      board.push({ suit: suits[3], value: honor[h] })
    }
  }
  return board
}

export default createBoard
