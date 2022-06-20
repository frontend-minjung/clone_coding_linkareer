import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li>이용약관</li>
        <li>개인정보처리방침</li>
        <li>고객문의</li>
      </ul>
      <p className={styles.copyright}>
        Copyright{' '}
        <a
          target="_blank"
          href="https://linkareer.com/"
          className={styles.link}
        >
          © Linkareer.
        </a>{' '}
        All Rights Reserved.
      </p>
      <img src="https://picsum.photos/500/20" />
    </footer>
  )
}

export default Footer
