import { useState } from "react";

const useCounter = (initialValue) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = () => {
        return setCounter(counter + 1);
    }

    const decrement = () => {
        return setCounter(counter - 1);
    }

    const reset = () => {
        return setCounter(initialValue);
    }

    return [counter, increment, decrement, reset];
}

export default useCounter;