import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment ,incrementByAmount,multiply} from './redux/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        Currently count is {count}
        <button onClick={() => dispatch(increment())}>+</button>

        <button onClick={() => dispatch(incrementByAmount(5))}>Increament by 5</button>
        <button onClick={() => dispatch(multiply())}>Multiply by 2</button>
      </div>
    </>
  )
}

export default App
