import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AboutPage } from '@feature/auth-context/pages/AboutPage';
import { LoginPage } from '@feature/auth-context/pages/LoginPage';
import { HomePage } from '@feature/auth-context/pages/HomePage';
import { Navbar } from '@feature/auth-context/components/Navbar';

export const AppRouter = () => {

    return (
        <BrowserRouter>

            <Navbar />

            <Routes>
                <Route exact path="/about" element={<AboutPage />} />  
                <Route exact path="/login" element={<LoginPage />} />  
                <Route exact path="/" element={<HomePage />} />  
                <Route path="*" element={<Navigate to="/" />} />  
            </Routes>
        </BrowserRouter>
    )
}
