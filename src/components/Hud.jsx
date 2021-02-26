import React from 'react'

function Hud({props, setStats}) {
    const {hp, score} = props

    const lives = []
    for (let i = 0; i < hp; i++) {
        lives.push(<div className="hud__left--hp"></div>)
        
    }

    return (
        <div className='hud'>
            <div className="hud__left">
                {lives.map(x => x)}
            </div>
            <div className="hud__right">
                <p>Score</p>
                <p>{score}</p>
            </div>
        </div>
    )
}

export default Hud
