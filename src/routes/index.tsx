import React, {lazy, FC } from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home"

const AppRoutes:FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/"/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;