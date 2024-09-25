import './app.css'

export function TwitterFollowCard({ userName, children, isFollowing }) {
    const imgSrc = `https://unavatar.io/${userName}`
    return (
        <article className='tw-followCard'>
            <header className="tw-followCard-header">
                <img
                className="tw-followCard-avatar"
                src={`https://unavatar.io/${userName}`} alt="avatar" />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button">
                    Seguir
                </button>
            </aside>
        </article>
    )
}

