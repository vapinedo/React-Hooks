import { useState } from "react";

export const useCounter = (initialState = 0) => {

    const [state, setState] = useState(initialState);

    const decrement = () => {
        setState(state - 1);
    };

    const reset = () => {
        setState(initialState);
    }

    const increment = () => {
        setState(state + 1);
    };

    return [state, decrement, reset, increment];   
}
