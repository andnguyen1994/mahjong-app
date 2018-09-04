export const mahjong = hand => {
  let eye = false
  let start = null
  let end = null

  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      start = 0
      end = 9
    } else if (i === 1) {
      start = 9
      end = 18
    } else if (i === 2) {
      start = 18
      end = 27
    }
    let sum = 0
    for (let j = 1; j <= 9; j++) {
      sum += j * hand[start - 1 + j]
    }
    let r = sum % 3
    if (r === 0) {
      if (!checkTriplets(hand.slice(start, end))) {
        if (
          checkTriplets(hand.slice(start, end), 2) ||
          checkTriplets(hand.slice(start, end), 5) ||
          checkTriplets(hand.slice(start, end), 8)
        ) {
          eye = true
        } else {
          return false
        }
      }
    } else {
      if (eye) return false
      if (r === 2) {
        if (
          checkTriplets(hand.slice(start, end), 0) ||
          checkTriplets(hand.slice(start, end), 3) ||
          checkTriplets(hand.slice(start, end), 6)
        ) {
          eye = true
        } else {
          return false
        }
      } else if (r === 1) {
        if (
          checkTriplets(hand.slice(start, end), 1) ||
          checkTriplets(hand.slice(start, end), 4) ||
          checkTriplets(hand.slice(start, end), 7)
        ) {
          eye = true
        } else {
          return false
        }
      }
    }
  }
  // check honor tiles
  for (let i = 27; i < hand.length; i++) {
    if (hand[i] > 0) {
      if (hand[i] !== 3 && eye) {
        return false
      } else if (hand[i] === 2 && !eye) {
        eye = true
      }
    }
  }
  return eye
}

const checkTriplets = (subHand, remove) => {
  console.log(subHand)
  if (remove >= 0) {
    subHand[remove] -= 2
  }
  for (let index = 0; index < 9; index++) {
    let val = subHand[index]
    if (val >= 3) {
      subHand[index] -= 3
    }
    val = subHand[index]
    if (val > 0) {
      if (index >= 7) return false
      else {
        subHand[index] -= val
        subHand[index + 1] -= val
        subHand[index + 2] -= val
      }
    } else if (val < 0) {
      return false
    }
  }
  return true
}

const populateHandArray = hand => {
  let handArray = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0]
  ]
  for (let i in hand) {
    let suit = hand[i].suit
    let val = hand[i].value
    handArray[suit][val] = handArray[suit][val] + 1
  }
  return handArray
}

//   while (ptr < hand.length && isWin) {
//     console.log(ptr)
//     if (checkSame(hand[ptr], hand[ptr + 1])) {
//       let isSame = ptr + 2 >= hand.length
//         ? false
//         : checkSame(hand[ptr], hand[ptr + 2])
//       if (isSame) {
//         ptr += 3
//         console.log('in condition 1')
//       } else if (!eye && !isSame) {
//         eye = true
//         ptr += 2
//         console.log('in condition 2')
//       } else {
//         isWin = false
//       }
//     } else if (checkSequence(hand[ptr], hand[ptr + 1])) {
//       if (checkSequence(hand[ptr + 1], hand[ptr + 2])) {
//         ptr += 3
//       } else {
//         isWin = false
//       }
//     } else {
//       isWin = false
//     }
//   }
//   return isWin && eye
// }

// const checkSame = (a, b) => {
//   return a.value === b.value && a.suit === b.suit
// }

// const checkSequence = (a, b) => {
//   return a.value + 1 === b.value && a.suit === b.suit
// }
