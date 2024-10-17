import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decremnt } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={()=> dispatch()}
      </div>
    </section>
  );
}

export default Counter;