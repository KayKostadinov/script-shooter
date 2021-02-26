import React from 'react'

function Player({mouse}) {
    const position = {
        top: mouse.y - 15,
        left: mouse.x - 10,
    }
    
    return (
        <div className='player' style={position}>
            <div className="player__gun"></div>
            <div className="player__body"></div>
        </div>
    )
}

export default Player
