import React from 'react';
import Container from '../components/Container'
import Principal from '../Pages/Principal'
import About from "../Pages/About";
import Games from "../Pages/Games";
import User from "../Pages/User";
import Registro from "../Pages/Registro";
import Login from "../Pages/Login";
import { Route, Routes } from 'react-router-dom';


const userRoutes = (
    <Routes>
        <Route path="/" element={
            <Container>
                <Principal/>
            </Container>
        }>
        </Route>

        <Route path="/about" element={
            <Container>
                <About/>
            </Container>
        }>
        </Route>

        <Route path="/games" element={
            <Container>
                <Games/>
            </Container>
        }>
        </Route>

        <Route path="/user" element={
            <Container>
                <User/>
            </Container>
        }>
        </Route>

        <Route path="/register" element={
            <Container>
                <Registro/>
            </Container>
        }>
        </Route>

        <Route path="/login" element={
            <Container>
                <Login/>
            </Container>
        }>
        </Route>
        
    </Routes>
);

export default userRoutes;