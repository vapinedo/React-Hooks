import { useState } from "react";

export const useCounter = (initialState = 0) => {

    const [counter, setCounter] = useState(initialState);

    const decrement = () => {
        setCounter(counter - 1);
    };

    const reset = () => {
        setCounter(initialState);
    }

    const increment = () => {
        setCounter(counter + 1);
    };

    return {counter, decrement, reset, increment};   
}
