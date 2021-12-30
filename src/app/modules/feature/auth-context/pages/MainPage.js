import React from 'react';
import { AppRouter } from '@app/AppRouter';
import { UserContext } from '@core/context/UserContext';

export const MainPage = () => {

    const user = { id: 1234, name: "Valp" };

    return (
        <>
            <UserContext.Provider value={user}>
                <AppRouter />
            </UserContext.Provider>
        </>
    )
}
