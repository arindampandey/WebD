import React, { useEffect } from 'react'

const Navbar = ({ color }) => {
    //Case1 : Run on every render
    useEffect(() => {
        alert("Hey Welcome , I will run on every render")
    }, [])

    //Case2 : Run only on first render
    useEffect(() => {
        alert("Hey Welcome to this page , this is first render")
    }, [])

    //Case3 : Run only when certain values change  
    useEffect(() => {
        alert("I am running because color was changed")
    }, [color])

    //Example of cleanup function 
    useEffect(() => {
        alert("This was first render of app.jsx")

        return () => {
            alert("Component was unmounted !")
        }
    }, [])
    
    return (
        <div>
            I am navabr of {color} color
        </div>
    )
}

export default Navbar
