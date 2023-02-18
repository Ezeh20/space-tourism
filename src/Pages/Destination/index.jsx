import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Layout from '../../Layout/Layout'
import styles from './destination.module.scss'
import data from '../../../data.json'
import buttons from './destination-data'

function Destination() {
  const urr = JSON.parse(localStorage.getItem('planets'))
  const [currentDestination, setCurrentDestionaton] = useState(urr ?? 0)
  const { images, name, description, distance, travel } =
    data.destinations[currentDestination]
  const { webp } = images

  useEffect(() => {
    localStorage.setItem('planets', JSON.stringify(currentDestination))
  }, [currentDestination])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className={styles.destination}
    >
      <Layout>
        <div className={styles.destinationCover}>
          <p className={`${styles.desTitle} menu2`}>
            <span>01</span>Pick your destination
          </p>
          <div className={styles.desContent}>
            <motion.div
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 5 }}
              exit={{ opacity: 0 }}
              className={styles.ContentTop}
            >
              <img src={webp} alt="planet" className={styles.planet} />
            </motion.div>
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
                        }   menu3`}
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
                <div className={styles.planetData}>
                  <p className={`${styles.desHeading} heading2`}>
                    {name.toLocaleUpperCase()}
                  </p>
                  <p className={`${styles.desText} text`}>{description}</p>
                </div>
              </div>
              <div className={styles.desLineBelow} />
              <div className={styles.desDuration}>
                <div className={styles.distance}>
                  <p className="menu3">AVG. DISTANCE</p>
                  <p className="heading4">{distance.toLocaleUpperCase()}</p>
                </div>
                <div className={styles.distance}>
                  <p className="menu3">EST. TRAVEL TIME</p>
                  <p className="heading4">{travel.toLocaleUpperCase()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </motion.div>
  )
}

export default Destination
