import React from 'react'
import component1 from './component1'

const Button = ({ count }) => {
    return (
        <div>
            <button><span><component1 count={count} /></span>I am button</button>
        </div>
    )
}

export default Button
