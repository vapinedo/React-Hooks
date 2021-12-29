import React, { useState } from 'react';
import { BreakingBadPage } from '@feature/breaking-bad/BreakingBadPage';

export const RealCaseRef = () => {

    const [show, setShow] = useState(false);

    const onToggle = () => {
        setShow(!show);
    };
    
    return (
        <>
            <h3>Real case use for useRef</h3>   
            <hr />

            {show && <BreakingBadPage />}

            <button onClick={onToggle} className="btn btn-primary mt-4">Show / Hide</button>
        </>
    )
}
