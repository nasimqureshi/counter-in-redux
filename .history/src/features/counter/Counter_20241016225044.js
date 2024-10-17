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
        <button onClick={()=> dispatch(increment())}></button>
        <button onClick={()=> dispatch(crement())}></button>
      </div>
    </section>
  );
}

export default Counter;
