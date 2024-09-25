import { useState } from "react"
import confetti from 'canvas-confetti'
import { Square } from "./Components/Square.jsx"
import { WINNER_COMBOS, TURNS } from "./constants.js"
import { WinnerModal } from "./Components/WinnerModal.jsx"


function App() {
  const [board, setBoard] = useState(() => {
    const boarFromStorage = window.localStorage.getItem('board')
    if (boarFromStorage) {
      return JSON.parse(boarFromStorage)
    }
    return Array(9).fill(null)
  })
  
    
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    if (turnFromStorage) {
      return turnFromStorage
    }
    return TURNS.x
  }
  )
  const [winner, setWinner] = useState(null)
  const checkWinner = (boardToCheck) => {

    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a]
      }
    }
    return false
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)

    window.localStorage.clear()
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every(square => square !== null)
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    //Guardar PArtida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    const newWinnner = checkWinner(newBoard)
    if (newWinnner) {
      confetti()
      setWinner(newWinnner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className="board">
      <h1>Hello World</h1>
      <button onClick={resetGame}>Reset</button>
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

      <section>
        <WinnerModal winner={winner} resetGame={resetGame} />
      </section>
    </main>
  )
}

export default App
