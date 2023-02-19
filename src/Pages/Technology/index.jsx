import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import styles from './Technology.module.scss'
import data from '../../../data.json'
import Techtop from './techTop'
import Techbottom from './techBottom'

function Technology() {
  const [currentData, setCurrentData] = useState(0)
  const { name, images, description } = data.technology[currentData]
  const { portrait, landscape } = images

  return (
    <div className={styles.technology}>
      <Layout>
        <div className={styles.techContainer}>
          <p className={`${styles.techTitle} menu2`}>
            <span>03</span>SPACE LAUNCH 101
          </p>
          <div className={styles.techContent}>
            <Techtop portrait={portrait} landscape={landscape} />
            <Techbottom
              name={name}
              currentData={currentData}
              setCurrentData={setCurrentData}
              description={description}
            />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Technology
