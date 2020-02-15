import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'src/store'
import { incrementCount, decrementCount, resetCount } from 'src/store/features/clockSlice';

export default () => {
  const count = useSelector((state: RootState) => state.clock.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Count:
        {' '}
        <span>{count}</span>
      </h1>
      <button onClick={() => dispatch(incrementCount())}>+1</button>
      <button onClick={() => dispatch(decrementCount())}>-1</button>
      <button onClick={() => dispatch(resetCount())}>Reset</button>
    </div>
  );
};
