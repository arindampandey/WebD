import React from 'react'
import "./Card.css"

const card = (props) => {
  return (
    <div className='card'>
      <img src='https://imgs.search.brave.com/dpWhNVe2jsWY18hXnPdAIL-x8SxQlGhwYV-um7qLb4E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvcHJv/ZmVzc2lvbmFscy9p/bWctZmlsbS53ZWJw/P3c9NjAw' width={220} style={{ border: "2px solid black", borderRadius: 10}}></img>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default card
