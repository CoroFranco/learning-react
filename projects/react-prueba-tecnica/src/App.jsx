import { useEffect } from 'react'
import './app.css'
import { useCatFact } from './hooks/useCatFact'
import { useGetCatImage } from './hooks/useGetCatImage'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const img = useGetCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  useEffect(refreshFact, [])

  return (
    <main>
      <h1>App de gaticos</h1>
      <button onClick={handleClick}>Get a cat fact</button>
      <section>
        {img && <img src={img} alt={img} />}
        {fact && <p>{fact}</p>}

      </section>
    </main>
  )
}
