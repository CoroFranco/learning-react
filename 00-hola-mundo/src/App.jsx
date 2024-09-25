import './app.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    return (
        <div className='App'>
            <TwitterFollowCard isFollowing={false} userName="SPYED" >
                El Psy Coro
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing userName="elonmuks">
                Yona
            </TwitterFollowCard>

        </div>
    )
}

