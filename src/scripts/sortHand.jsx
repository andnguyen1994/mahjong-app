export const sort = (a, b) => {
  const suitA = a.suit
  const suitB = b.suit
  const valueA = a.value
  const valueB = b.value
  if (suitA < suitB) {
    return -1
  } else if (suitA === suitB) {
    return valueA - valueB
  } else {
    return 1
  }
}
