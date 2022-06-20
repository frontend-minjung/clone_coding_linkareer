import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.list}>
        {/* 차후에 onclick에 따라 아이콘 색상 변경 및 서치 보이는 기능 구현 */}
        <button className={styles.button}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <ul className={styles.items}>
          <li>
            <i className="fa-solid fa-calendar-check"></i>
          </li>
          <li>
            <i className="fa-solid fa-bell"></i>
          </li>
          <li>
            <i className="fa-solid fa-bookmark"></i>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
