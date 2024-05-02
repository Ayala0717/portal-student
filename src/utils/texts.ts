export function obtainFirsLettersOfWords(str: string, limit?: number) {
  const splitWord = str.split(' ', limit || 2)
  const firstLettters = splitWord.map((word) => word[0])
  const mergeWords = firstLettters.join('')

  return mergeWords || ''
}
