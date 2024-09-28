const CAT_ENDPOINT_IMAGE = 'https://cataas.com/cat/says/'

export const getRandomImagen = async (firstWord) => {
  const res = await fetch(CAT_ENDPOINT_IMAGE + firstWord + '?json=true')
  const data = await res.json()
  const url = CAT_ENDPOINT_IMAGE + firstWord
  return url
}
