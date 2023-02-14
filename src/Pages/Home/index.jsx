import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import styles from './Home.module.scss'

function Home() {
    return (
        <div className={styles.home}>
            <Layout>
                <p>home</p>
            </Layout>
        </div>
    )
}

export default Home
