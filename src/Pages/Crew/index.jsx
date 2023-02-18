/* eslint-disable no-param-reassign */
import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import styles from './Crew.module.scss'
import CrewContent from './crew'

function Crew() {
  const [[currentPage, direction], setCurrentPage] = useState([0, 0])
  return (
    <div className={styles.crew}>
      <Layout>
        <CrewContent
          currentPage={currentPage}
          direction={direction}
          setCurrentPage={setCurrentPage}
        />
      </Layout>
    </div>
  )
}

export default Crew
