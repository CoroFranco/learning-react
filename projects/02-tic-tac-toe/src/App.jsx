import { useState } from "react"

const TURNS = {
  x: 'X',
  o: 'O',
}

const Square = ({ children, updateBoard, index, isSelected }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState('X')
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {

    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a]
      }
    }
    return null
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === 'X' ? 'O' : 'X'
    setTurn(newTurn)
    const newWinnner = checkWinner(newBoard)
    if (newWinnner) {
      setWinner(newWinnner)
    }
  }

  return (
    <main className="board">
      <h1>Hello World</h1>
      <section className="game">
        {
          board.map((_, i) => {
            return (
              <Square
                key={i}
                index={i}
                updateBoard={updateBoard}
              >{board[i]}</Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>
    </main>


  )
}

export default App
