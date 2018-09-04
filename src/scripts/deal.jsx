export const deal = source => {
  let tile = source[source.length - 1]
  source.splice(source.length - 1, 1)
  return tile
}
