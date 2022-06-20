import React from 'react'
import styles from './search.module.css'

const Search = () => {
  return (
    <div className={styles.search}>
      <input className={styles.input} type="text" />
    </div>
  )
}

export default Search
