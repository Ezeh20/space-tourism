/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import data from '../../../data.json'
import styles from './cre.module.scss'
import Pagination from './pagination'

const pages = [0, 1, 2, 3]
function CrewContent({ currentPage, direction, setCurrentPage }) {
  /**
   * set the page
   */
  function setPage(newPage, newDirection) {
    if (!newDirection) {
      newDirection = newPage - currentPage
    }
    setCurrentPage([newPage, newDirection])
  }
  /**
   * offsets
   */
  const xOffset = 100
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? xOffset : -xOffset,
      opacity: 0,
    }),
    active: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.2 },
    },
    exit: (dir) => ({
      x: dir > 0 ? -xOffset : xOffset,
      opacity: 0,
    }),
  }

  const hasPaginated = useRef(false)

  function detectPaginationGesture(e, { offset }) {
    if (hasPaginated.current) return
    let newPage = currentPage
    const threshold = xOffset / 2

    if (offset.x < -threshold) {
      // If we're dragging left, go forward a page
      newPage = currentPage + 1
    } else if (offset.x > threshold) {
      // If we're dragging right, go backwards a page
      newPage = currentPage - 1
    }

    if (newPage !== currentPage) {
      hasPaginated.current = true
      // Wrap the page index to within the permitted page range
      newPage = wrap(0, pages.length, newPage)
      setPage(newPage, offset.x < 0 ? 1 : -1)
    }
  }

  return (
    <div className={styles.crewContainer}>
      <p className={`${styles.crewTitle} menu2`}>
        <span>02</span>MEET YOUR CREW
      </p>
      <div className={styles.crewContent}>
        <AnimatePresence initial={false} custom={direction}>
          <div>
            {data.crew
              .filter((_, idx) => idx === currentPage)
              .map((crew) => {
                const { name, images, role, bio } = crew
                const { webp } = images
                return (
                  <div key={name} className={styles.crewData}>
                    <motion.div
                      data-page={currentPage}
                      variants={variants}
                      initial="enter"
                      animate="active"
                      exit="exit"
                      drag="x"
                      onDrag={detectPaginationGesture}
                      onDragStart={() => (hasPaginated.current = false)}
                      onDragEnd={() => (hasPaginated.current = true)}
                      // Snap the component back to the center if it hasn't paginated
                      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                      // This will be used for components to resolve all other variants, in
                      // this case initial and animate.
                      custom={direction}
                      className={styles.crewTop}
                    >
                      <img
                        src={webp}
                        alt={`${name}`}
                        className={styles.crewImg}
                      />
                      <div className={styles.crewLine} />
                    </motion.div>
                    <div className={styles.crewBottom}>
                      <Pagination
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                      />
                      <motion.div
                        data-page={currentPage}
                        variants={variants}
                        initial="enter"
                        animate="active"
                        exit="exit"
                        drag="x"
                        onDrag={detectPaginationGesture}
                        onDragStart={() => (hasPaginated.current = false)}
                        onDragEnd={() => (hasPaginated.current = true)}
                        // Snap the component back to the center if it hasn't paginated
                        dragConstraints={{
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                        }}
                        // This will be used for components to resolve all other variants, in
                        // this case initial and animate.
                        custom={direction}
                        className={styles.crewPerson}
                      >
                        <div className={styles.personTop}>
                          <p className={`${styles.crewRole} heading5`}>
                            {role.toUpperCase()}
                          </p>
                          <p className="heading3">{name.toUpperCase()}</p>
                        </div>
                        <p className={`${styles.crewBio} text`}>{bio}</p>
                      </motion.div>
                    </div>
                  </div>
                )
              })}
          </div>
        </AnimatePresence>
      </div>
    </div>
  )
}
export default CrewContent
CrewContent.propTypes = {
  currentPage: PropTypes.number.isRequired,
  direction: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
}
