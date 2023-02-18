/* eslint-disable no-param-reassign */
import PropTypes from 'prop-types'
import React from 'react'
import { AnimateSharedLayout } from 'framer-motion'
import Dot from './dot'
import './pagination.scss'

const pages = [0, 1, 2, 3]

function Pagination({ currentPage, setCurrentPage }) {
  function setPage(newPage, newDirection) {
    if (!newDirection) {
      newDirection = newPage - currentPage
    }
    setCurrentPage([newPage, newDirection])
  }
  return (
    <AnimateSharedLayout>
      <div className="dots">
        {pages.map((page) => (
          <Dot
            key={page}
            onClick={() => setPage(page)}
            isSelected={page === currentPage}
          />
        ))}
      </div>
    </AnimateSharedLayout>
  )
}

export default Pagination
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.arrayOf(PropTypes.number).isRequired,
}
