import React from 'react'
import styles from './menubar.module.css'

const MenuBar = () => {
  return (
    <section className={styles.menubar}>
      <div>
        <ul className={styles.menu}>
          <li>
            <a href="#">전체글</a>
          </li>
          <li>
            <a href="#">인기글</a>
          </li>
          <li>
            <a href="#">공지</a>
          </li>
          <li>
            <a className={styles.bookmark} href="#">
              즐겨찾기
            </a>
          </li>
        </ul>
      </div>
      <button className={styles.button}>
        <i className="fa-solid fa-pencil"></i>
      </button>
    </section>
  )
}

export default MenuBar
