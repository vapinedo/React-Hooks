import React from 'react';
import "./App.css";

// import { CounterPage } from "@feature/counter/pages/CounterPage";
// import { CounterWithCustomHook } from '@feature/counter/pages/CounterWithCustomHook';
// import { SimpleFormPage } from '@feature/simpleform/pages/SimpleFormPage';
import { FormWithCustomHook } from '@feature/simpleform/FormWithCustomHook';

export const App = () => {
    return (
        <main className="container main-container">
            <FormWithCustomHook />
        </main>
    )
}
