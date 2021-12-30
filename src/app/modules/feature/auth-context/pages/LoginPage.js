import React, { useContext } from 'react';
import { UserContext } from '@core/context/UserContext';

export const LoginPage = () => {

    const { setUser } = useContext(UserContext);

    const onLogin = () => {
        setUser({
            id: 123,
            name: "Valp"
        });
    };
    
    return (
        <>
            <h3>Login Page</h3>   
            <hr />

            <button onClick={onLogin} className="btn btn-primary">Acceder</button>
        </>
    )
}
