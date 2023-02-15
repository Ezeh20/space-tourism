import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <ul
            className={`${
              active
                ? `${`${styles.navListActive} ${styles.navLists} `}`
                : `${styles.navLists}`
            }`}
          >
            <div className={styles.allElem}>
              {navElements.map((elements) => {
                return (
                  <li key={elements.id} className={styles.lists}>
                    <Link to={elements.to} className={styles.links}>
                      <div className={styles.position}>{elements.position}</div>
                      <div className={styles.elem}>{elements.elem}</div>
                    </Link>
                  </li>
                )
              })}
            </div>
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
        </nav>
      </header>
    </div>
  )
}

export default Navigation
