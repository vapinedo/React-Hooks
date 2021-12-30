import React, { useContext } from 'react'
import { UserContext } from '@core/context/UserContext';

export const HomePage = () => {

    const userContext = useContext(UserContext);
    console.log(userContext);
    
    return (
        <>
            <h3>Home Page</h3>   
            <hr />
        </>
    )   
}
