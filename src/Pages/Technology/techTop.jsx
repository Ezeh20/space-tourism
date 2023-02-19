import React from 'react'
import PropTypes from 'prop-types'
import styles from './Technology.module.scss'

function Techtop({ portrait, landscape }) {
  return (
    <div className={styles.techTop}>
      <img src={landscape} alt="landscape" className={styles.imgLandscape} />
      <img src={portrait} alt="portrait" className={styles.imgPortrait} />
    </div>
  )
}

export default Techtop
Techtop.propTypes = {
  portrait: PropTypes.string.isRequired,
  landscape: PropTypes.string.isRequired,
}
