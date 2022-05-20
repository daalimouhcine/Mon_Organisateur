import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '../header/header.component';
import Home from '../../pages/home/home.page';
import About from '../../pages/about/about.page';
import Contact from '../../pages/contact/contact.page';
import Login from '../../pages/auth/login/login.page';
import Register from '../../pages/auth/register/register.page';

import '../../lib/common/styles/index';
import './app.component.css';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;