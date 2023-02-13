import React, { useContext } from 'react';
import Layout from '../../Layout/Layout';
import styles from './Home.module.scss';

function Home() {
  return (
    <div>
      <Layout>
        <div className={`${styles.homo}`}>
          <h1>abb</h1>
        </div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>click</button>
      </Layout>
    </div>
  );
}

export default Home;
