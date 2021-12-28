import React from 'react';
import "./App.css";

import { CounterPage } from "@feature/counter/pages/CounterPage";

export const App = () => {
    return (
        <main className="container main-container">
            <CounterPage />
        </main>
    )
}
