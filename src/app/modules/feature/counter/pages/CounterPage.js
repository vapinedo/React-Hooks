import React, { useState } from 'react';

export const CounterPage = () => {

    const [state, setState] = useState(1);

    const decrement = () => {
        setState(state - 1);
    };

    const increment = () => {
        setState(state + 1);
    };
    
    return (
        <>
            <h3>Counter</h3>
            <hr />

            <section className="row g-3">
                <div className="col-auto">
                    <button onClick={decrement} className="btn btn-primary">-1</button>
                </div>

                <div className="col-auto">
                    <input type="text" readOnly={true} className="form-control" value={state} />
                </div>

                <div className="col-auto">
                    <button onClick={increment} className="btn btn-primary">+1</button>
                </div>
            </section>
        </>
    )
}
