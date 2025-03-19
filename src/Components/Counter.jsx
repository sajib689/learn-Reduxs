import { useDispatch, useSelector } from "react-redux";


const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            
        </div>
    );
};

export default Counter;