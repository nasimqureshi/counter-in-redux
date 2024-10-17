import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  increment, 
  decrement,
  reset,
  incrementByAmount } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  
  return (
    <section> 
     
      <h1>{count}</h1>
      
      <div>
        <button onClick={()=> dispatch(increment())}>+</button>
        <button onClick={()=> dispatch(decrement())}>-</button>
      </div>
      <br />
      <br />
      <h6>Developed by Nasim</h6>
    </section>
  );
}

export default Counter;