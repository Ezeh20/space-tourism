import React, { useContext } from 'react'
import Navigation from './Nav-Bar/Navigation'
import styles from './Layout.module.scss'
import Footer from './Footer/Footer'

const Layout = ({ children }) => {
    return (
        <div className={`${styles.main} text bg`}>
            <Navigation />
            {children}
           {/** <Footer /> */}
        </div>
    )
}

export default Layout