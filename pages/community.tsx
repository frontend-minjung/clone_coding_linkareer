import React from 'react'
import Header from '../src/components/header/header';
import Menubar from '../src/components/menubar/menubar';
import styles from '../styles/community.module.css';
import BestBoard from '../src/components/best_board/best_board';
import InternBoard from '../src/components/intern_board/intern_board';
import Footer from '../src/components/footer/footer';

const community = () => {
  return (
    <>
      <Header />
      <Menubar />
      <section className={styles.container}>
        <section className={styles.wrapper}>
          <BestBoard />
        </section>
        <InternBoard />
      </section>
      <Footer />
    </>
  )
}

export default community