import React from 'react';
import Container from '../components/Container'
import Principal from '../Pages/Principal'
import { Route, Routes } from 'react-router-dom';


const userRoutes = (
    <Routes>
        <Route path="/" element={
            <Container>
                <Principal/>
            </Container>
        }>
        </Route>

    </Routes>
);

export default userRoutes;