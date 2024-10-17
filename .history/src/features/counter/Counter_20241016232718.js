import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  increment, 
  decrement,
  reset,
  incrementByAmount } from './counterSlice';
  import { useState } from 'react';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementByAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  }
  
  return (
    <section> 
     
      <h1>{count}</h1>
      
      <div>
        <button onClick={()=> dispatch(increment())}>+</button>
        <button onClick={()=> dispatch(decrement())}>-</button>
      </div>

      <input
      type="text"
      value={incrementAmount}
      onChange={(e) => setIncrementAmount(e.target.value)}
      <br />
      <br />
      <h6>Developed by Nasim</h6>
    </section>
  );
}

export default Counter;
