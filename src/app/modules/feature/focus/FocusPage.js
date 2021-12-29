import React, { useRef } from 'react';

export const FocusPage = () => {

    const inputRef = useRef();

    const onFocus = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h3>Focus page</h3>
            <hr />

            <input ref={inputRef} type="text" className="form-control mt-4" placeholder="Tu nombre" />
            <button onClick={onFocus} className="btn btn-primary mt-4">Focus</button>
        </>
    )
}
