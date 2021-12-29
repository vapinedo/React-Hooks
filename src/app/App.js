import React from 'react';
import "./App.css";

// import { CounterPage } from "@feature/counter/pages/CounterPage";
// import { CounterWithCustomHook } from '@feature/counter/pages/CounterWithCustomHook';
// import { SimpleFormPage } from '@feature/form/pages/SimpleFormPage';
// import { FormWithCustomHookPage } from '@feature/form/pages/FormWithCustomHookPage';
// import { BreakingBadPage } from '@feature/breaking-bad/BreakingBadPage';
// import { FocusPage } from '@feature/focus/FocusPage';
// import { RealCaseRef } from '@feature/focus/RealCaseRef';
import { MainPage } from '@feature/auth-context/pages/MainPage';

export const App = () => {
    return (
        <main className="container main-container">
            <MainPage />
        </main>
    )
}
