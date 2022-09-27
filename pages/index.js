import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import FavoriteCoins from '../components/favoriteCoins.component'
import { AllCoins } from '../components/allCoins.component'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coin Gecko App</title>
        <meta name="description" content="The Coin Gecko app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FavoriteCoins/>
      <AllCoins/>
    </div>
  )
}
