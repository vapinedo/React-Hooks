import React, { useState } from 'react';
import { AppRouter } from '@app/AppRouter';
import { UserContext } from '@core/context/UserContext';

export const MainPage = () => {

    const [user, setUser] = useState({});

    return (
        <>
            <UserContext.Provider value={{ user, setUser }}>
                <AppRouter />
            </UserContext.Provider>
        </>
    )
}
