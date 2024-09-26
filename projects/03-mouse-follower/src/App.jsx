import { useEffect, useState } from 'react'

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
      setPosition({ x: 0, y: 0 })
    }
  }, [enabled])

  useEffect(() => {
    if (enabled) {
      document.body.classList.add('no-cursor')
    }

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  useEffect(() => {
    document.getElementById('title').textContent = enabled ? '¡Seguir puntero!' : 'No seguir puntero'
  }, [enabled])

  return (
    <main>
      <div style={{
        position: 'absolute',
        borderRadius: '50%',
        opacity: '0.8',
        pointerEvents: 'none',
        left: -0,
        top: -0,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`,
        fontSize: '40px'
      }}
      > 💯
      </div>

      <h1 id='title'>Hello World</h1>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}

export default App
