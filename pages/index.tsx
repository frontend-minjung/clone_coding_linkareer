import type { NextPage } from 'next'
import styles from '../styles/home.module.css'
import Header from '../src/components/header/header';
import Search from '../src/components/search/search';
import Footer from '../src/components/footer/footer';
import PopularityRecruit from '../src/components/popularity_recruit/popularity_recruit';
import ActivityInfo from '../src/components/activity_info/activity_info';

const Home: NextPage = () => {

  return (
    <>
      <Header />
      <Search />
      <section className={styles.container}>
        <PopularityRecruit />
        <ActivityInfo />
      </section>
      <Footer /> 
    </>
  )
}

export default Home
