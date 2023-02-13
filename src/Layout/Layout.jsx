import React from 'react'
import PropTypes from 'prop-types'
import Navigation from './Nav-Bar/Navigation'
import styles from './Layout.module.scss'
import Footer from './Footer/Footer'

function Layout({ children }) {
  return (
    <div className={`${styles.main} text bg`}>
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
