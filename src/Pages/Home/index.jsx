import React from 'react'
import Layout from '../../Layout/Layout'
import styles from './Home.module.scss'
import { homeData } from './home-data'

function Home() {
  return (
    <div className={styles.home}>
      <Layout>
        <div className={styles.homeCover}>
          <div className={styles.homeTop}>
            <p className="menu">{homeData.para}</p>
            <h1 className={`${styles.headingHome} heading`}>
              {homeData.heading}
            </h1>
            <p className={`${styles.homeContent} text`}>{homeData.content}</p>
          </div>
          <div className={styles.homeBottom}>
            <div className={styles.explore}>
              <p className={styles.exploreText}>EXPLORE</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home
