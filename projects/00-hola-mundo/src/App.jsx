import './app.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    return (
        <div className='App'>
            <TwitterFollowCard initialIsFollowing userName="SPYED" >
                El Psy Coro
            </TwitterFollowCard>
            <TwitterFollowCard initialIsFollowing={false} userName="elonmuks">
                Yona
            </TwitterFollowCard>
        </div>
    )
}