export function formatDate(input: string | number | Date) {
  const date = new Date(input)
  return `${date.getFullYear()}-${date
    .getMonth()
    .toString()
    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
}
