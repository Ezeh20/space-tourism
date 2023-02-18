import { Route, Routes } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import Home from './Pages/Home'
import Destination from './Pages/Destination'
import Crew from './Pages/Crew'
import Technology from './Pages/Technology'

function App() {
  return (
    <motion.div>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Routes>
      </AnimatePresence>
    </motion.div>
  )
}

export default App
