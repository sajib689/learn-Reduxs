import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../Redux/CounterSlice";


const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(increment());
    }
    const handleDecrement = () => {
        dispatch(decrement());
    }
    const handleMultiply = () => {
        dispatch(incrementByAmount(2));
    }
    return (
        <div>
            <h1>{count}</h1>
            <button  onClick={() => handleIncrement()}>Increment</button>
            <button onClick={() => handleDecrement()}>Decrement</button>
            <button onClick={() => handleMultiply()}>Increment By Multiply</button>
        </div>
    );
};

export default Counter;