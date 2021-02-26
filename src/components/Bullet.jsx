import React from 'react'

function Bullet({canShoot, shots, position}) {
    const init = {
        top: position.y - 15,
        left: position.x - 10,
    }

    return (
        <div>
            {shots.map(shot => <div key={shot} className={`bullet ${shot && 'move'}`} style={init}></div>)}
        </div>
    )
}

export default Bullet
