import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from './Pages/Home/Home';
import GoLive from './Pages/GoLive/GoLive';
import Schedule from './Pages/Schedule/ScheduleEvent';
import Recommendation from './Pages/Recommendation/Recommendation';
import Chatbot from './components/Chatbot/Chatbot';

export default function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/golive" element={<GoLive />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/recommendation" element={<Recommendation />} />
            </Routes>
            <Chatbot />
        </BrowserRouter>
    );
}
