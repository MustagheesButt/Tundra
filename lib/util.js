export function parseCurrency(str) {
  return parseFloat(str.replaceAll(/(?!\.)(\D+)/g, ''))
}