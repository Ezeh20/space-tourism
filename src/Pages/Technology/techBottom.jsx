import React from 'react'
import PropTypes from 'prop-types'
import styles from './Technology.module.scss'

const navBtn = [1, 2, 3]

function Techbottom({ name, currentData, setCurrentData, description }) {
  return (
    <div className={styles.techBottom}>
      <div className={styles.techNav}>
        {navBtn.map((nav, idx) => {
          return (
            <button
              key={nav}
              type="button"
              onClick={() => setCurrentData(idx)}
              className={`${
                currentData === idx
                  ? `${`${styles.navButton} ${styles.navButtonActive}`}`
                  : `${styles.navButton}`
              }`}
            >
              {nav}
            </button>
          )
        })}
      </div>
      <div className={styles.techData}>
        <div className={styles.dataTop}>
          <p className="menu3">THE TERMINOLOGY…</p>
          <p className="heading3">{name.toUpperCase()}</p>
        </div>
        <div className={styles.dataBottom}>
          <p className={`${styles.dataContent} text`}>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Techbottom
Techbottom.propTypes = {
  name: PropTypes.string.isRequired,
  currentData: PropTypes.number.isRequired,
  setCurrentData: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
}
