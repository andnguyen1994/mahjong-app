export const mahjong = hand => {
  let eye = false
  let isWin = true
  let ptr = 0

  // let handArray = populateHandArray(hand)

  // for(let i in handArray){
  //   if(i >= 3){
  //     if (handArray[i] > 0){
  //       if(handArray[i] !== 3 && eye){
  //         isWin = false
  //       }else if(handArray[i] === 2 && !eye){
  //         eye = true
  //       }
  //     }
  //   }else{
  //     for(let )
  //   }
  // }

  while (ptr < hand.length && isWin) {
    console.log(ptr)
    if (checkSame(hand[ptr], hand[ptr + 1])) {
      let isSame = ptr + 2 >= hand.length
        ? false
        : checkSame(hand[ptr], hand[ptr + 2])
      if (isSame) {
        ptr += 3
        console.log('in condition 1')
      } else if (!eye && !isSame) {
        eye = true
        ptr += 2
        console.log('in condition 2')
      } else {
        isWin = false
      }
    } else if (checkSequence(hand[ptr], hand[ptr + 1])) {
      if (checkSequence(hand[ptr + 1], hand[ptr + 2])) {
        ptr += 3
      } else {
        isWin = false
      }
    } else {
      isWin = false
    }
  }
  return isWin && eye
}

const populateHandArray = hand => {
  let handArray = [[], [], []]
  for (let i in hand) {
    let suit = hand[i].suit
    let val = hand[i].val
    if (suit >= 3) {
      handArray[suit]++
    } else {
      handArray[suit][val]++
    }
  }
  return handArray
}

const checkSame = (a, b) => {
  return a.value === b.value && a.suit === b.suit
}

const checkSequence = (a, b) => {
  return a.value + 1 === b.value && a.suit === b.suit
}
