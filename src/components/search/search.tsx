import React from 'react'
import styles from './search.module.css';

const search = () => {
  return (
    <div className={styles.search}>
        <input className={styles.input} type="text"/>
    </div>
  )
}

export default search