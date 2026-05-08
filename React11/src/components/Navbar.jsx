import React from 'react'
import { memo } from 'react'

const Navbar = ({ adjactive, getadjactive }) => {
    console.log("Navbar is rendered !")
    return (
        <div>
            I am an {adjactive} Navbar
            <button onClick={() => { getadjactive() }}>{getadjactive()}</button>
        </div >
    )
}

export default memo(Navbar)
