import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import './dot.scss'

function Dot({ isSelected, onClick }) {
  return (
    <button type="button" className="dot-click" onClick={onClick}>
      <div className="dot">
        {isSelected && (
          <motion.div className="dot-highlight" layoutId="highlight" />
        )}
      </div>
    </button>
  )
}

export default Dot
Dot.propTypes = {
  isSelected: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
}
