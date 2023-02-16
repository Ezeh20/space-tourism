import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import styles from './destination.module.scss'
import data from '../../../data.json'
import buttons from './destination-data'

function Destination() {
  const urr = JSON.parse(localStorage.getItem('planets'))
  const [currentDestination, setCurrentDestionaton] = useState(urr ?? 0)
  const planet = data.destinations[currentDestination].images.webp

  useEffect(() => {
    localStorage.setItem('planets', JSON.stringify(currentDestination))
  }, [currentDestination])

  return (
    <div className={styles.destination}>
      <Layout>
        <div className={styles.destinationCover}>
          <p className={`${styles.desTitle} heading4`}>
            <span>01</span>Pick your destination
          </p>
          <div className={styles.desContent}>
            <div className={styles.ContentTop}>
              <img src={planet} alt="planet" className={styles.planet} />
            </div>
            <div className={styles.contentBottom}>
              <div className={styles.desBtnContainer}>
                <div className={styles.desBtn}>
                  {buttons.map(({ id, des }) => {
                    return (
                      <button
                        type="button"
                        key={id}
                        className={` ${
                          currentDestination === id
                            ? `${`${styles.desButton} ${styles.btnActive}`}`
                            : `${styles.desButton}`
                        }   menu2`}
                        onClick={() => setCurrentDestionaton(id)}
                      >
                        <div>{des}</div>
                        <div
                          className={`${
                            currentDestination === id
                              ? `${`${styles.desLineActive}`}`
                              : `${styles.desLine}`
                          }`}
                        />
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Destination
