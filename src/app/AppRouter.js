import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutPage } from '@feature/auth-context/pages/AboutPage';
import { LoginPage } from '@feature/auth-context/pages/LoginPage';
import { HomePage } from '@feature/auth-context/pages/HomePage';

export const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/about" element={<AboutPage />} />  
                <Route exact path="/login" element={<LoginPage />} />  
                <Route exact path="/" element={<HomePage />} />  
            </Routes>
        </BrowserRouter>
    )
}
