import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/CounterSlice";


const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(increment());
    }
    const handleDecrement = () => {
        dispatch(decrement());
    }
    return (
        <div>
            <h1>{count}</h1>
            <button  onClick={() => handleIncrement()}>Increment</button>
            <button onClick={() => handleDecrement()}>Decrement</button>
        </div>
    );
};

export default Counter;