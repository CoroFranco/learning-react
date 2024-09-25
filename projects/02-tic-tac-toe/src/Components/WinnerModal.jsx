import { Square } from "./Square.jsx"
export function WinnerModal({ resetGame, winner}) {
    if (winner === null) return null

    const winnerText = winner === false ? 'Tie game!' : `Gano:`
    return (
        winner !== null && (
          <section className="winner">
            <div className="text">
                <h2>{winnerText}</h2>
              <header>
                { <Square >{winner}</Square> }
              </header>
                <footer>
                  <button onClick={resetGame}>Reiniciar</button>
                </footer>
            </div>
          </section>
        )
    )
}