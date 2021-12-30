import React, { useContext } from 'react'
import { UserContext } from '@core/context/UserContext';

export const HomePage = () => {

    const { user } = useContext(UserContext);
    console.log(user);
    
    return (
        <>
            <h3>Home Page</h3>   
            <hr />

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
        </>
    )   
}
