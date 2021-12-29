import React from 'react';
import { useCounter } from '@core/hooks/useCounter';

export const CounterWithCustomHook = () => {

    const {counter, decrement, reset, increment} = useCounter();
    
    return (
        <>
            <h3>Counter with custom hook</h3>   
            <hr />

            <section className="row g-3">
                <div className="col-auto">
                    <button onClick={decrement} className="btn btn-primary">-1</button>
                </div>

                <div className="col-auto">
                    <input type="text" readOnly={true} className="form-control" value={counter} />
                </div>

                <div className="col-auto">
                    <button onClick={increment} className="btn btn-primary">+1</button>
                    <button onClick={reset} className="btn btn-outline-danger mx-3">Reset</button>
                </div>
            </section>

        </>
    )
}
