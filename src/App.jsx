import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from './Pages/Home'
import Destination from './Pages/Destination'
import Crew from './Pages/Crew'
import Technology from './Pages/Technology'

function App() {
    return (
        <div>
            <Routes>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="destination" element={<Destination />} />
                <Route path="crew" element={<Crew />} />
                <Route path="technology" element={<Technology />} />
            </Routes>
        </div>
    )
}

export default App
