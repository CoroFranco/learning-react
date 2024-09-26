import { useEffect, useState } from 'react'

function App () {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    console.log('useEffect')
  })
  return (
    <h1>Hello World</h1>
  )
}

export default App
