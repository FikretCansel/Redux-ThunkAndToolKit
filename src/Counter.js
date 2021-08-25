import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counterReducer'

export function Counter() {
  const count = useSelector((state) => state.counterReducer?.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => {
              dispatch(decrement())
              console.log(count);
        }}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}