import React from 'react';
import Container from '../components/Container'
import Principal from '../Pages/Principal'
import About from "../Pages/About";
import Games from "../Pages/Games";
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
        
    </Routes>
);

export default userRoutes;