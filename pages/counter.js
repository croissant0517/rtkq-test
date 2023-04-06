import { useSelector, useDispatch } from "react-redux";

import { decrement, increment } from "../slices/counterSlice";

export default function Counter() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{value}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
