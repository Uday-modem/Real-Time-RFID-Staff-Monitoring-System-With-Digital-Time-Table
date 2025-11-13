import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './components/Common/Landing';
import StudentLogin from './components/Auth/StudentLogin';
import StudentSignup from './components/Auth/StudentSignup';
import AdminLogin from './components/Auth/AdminLogin';
import StudentHome from './components/Home/StudentHome';
import AdminHome from './components/Home/AdminHome';
import './styles/App.css';
import './styles/Auth.css';
import './styles/Home.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/student-login" element={<StudentLogin />} />
                <Route path="/student-signup" element={<StudentSignup />} />
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/student-home" element={<StudentHome />} />
                <Route path="/admin-home" element={<AdminHome />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
