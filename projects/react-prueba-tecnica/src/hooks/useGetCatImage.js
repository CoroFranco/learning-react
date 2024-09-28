import { useState, useEffect } from 'react'
import { getRandomImagen } from '../services/images'

export function useGetCatImage ({ fact }) {
  const [img, setImg] = useState()

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 3).join(' ')
    getRandomImagen(firstWord).then(newImage => setImg(newImage))
  }, [fact])

  return img
}
