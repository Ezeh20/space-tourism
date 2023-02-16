import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../public/images/shared/logo.svg'
import ham from '../../../public/images/shared/icon-hamburger.svg'
import close from '../../../public/images/shared/icon-close.svg'
import styles from './Navigation.module.scss'
import { navElements } from './Navigation-data'

function Navigation() {
  const [active, setActive] = useState(false)
  const toggleMenu = () => setActive((curr) => !curr)

  return (
    <div className={styles.navigation}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink to="/" className={styles.logo}>
            <img src={logo} alt="logo" />
          </NavLink>
          <ul
            className={`${
              active
                ? `${`${styles.navListActive} ${styles.navLists} `}`
                : `${styles.navLists}`
            }`}
          >
            {navElements.map((elements) => {
              return (
                <li key={elements.id} className={styles.lists}>
                  <NavLink
                    to={elements.to}
                    className={({ isActive }) => {
                      return isActive
                        ? `${`${styles.links} ${styles.active}`}`
                        : `${styles.links}`
                    }}
                  >
                    <div className={styles.position}>{elements.position}</div>
                    <div className={styles.elem}>{elements.elem}</div>
                  </NavLink>
                  <div className={styles.line} />
                </li>
              )
            })}

            <div className={styles.close}>
              <button type="button" onClick={toggleMenu}>
                <img src={close} alt="close" />
              </button>
            </div>
          </ul>
          <div className={styles.ham}>
            <button type="button" onClick={toggleMenu}>
              {active ? '' : <img src={ham} alt="ham" />}
            </button>
          </div>
          <div className={styles.strike} />
        </nav>
      </header>
    </div>
  )
}

export default Navigation

/** styles.links */
