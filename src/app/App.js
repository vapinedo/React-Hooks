import React from 'react';
import "./App.css";

// import { CounterPage } from "@feature/counter/pages/CounterPage";
// import { CounterWithCustomHook } from '@feature/counter/pages/CounterWithCustomHook';
// import { SimpleFormPage } from '@feature/form/pages/SimpleFormPage';
// import { FormWithCustomHookPage } from '@feature/form/pages/FormWithCustomHookPage';
// import { BreakingBadPage } from '@feature/breaking-bad/BreakingBadPage';
import { FocusPage } from '@feature/focus/FocusPage';

export const App = () => {
    return (
        <main className="container main-container">
            <FocusPage />
        </main>
    )
}
