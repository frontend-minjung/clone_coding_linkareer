import React from 'react'
import styles from './activity_info_card.module.css'

const activityInfoCard = ({ activity }) => {
  const {
    id,
    activity_category,
    company,
    title,
    condition,
    field,
    expiry_date,
    views,
  } = activity

  return (
    <section className={styles.container}>
      <ul className={styles.cards}>
        <li className={styles.card}>
          {/* image */}
          <div className={styles.wrapper}>
            <img src="https://picsum.photos/150" />
          </div>
          {/* info */}
          <div className={styles.item}>
            <div className={styles.company}>
              <button className={styles.category}>{activity_category}</button>
              <span className={styles.name}>{company}</span>
            </div>
            <p className={styles.position}>{title}</p>
            <ul className={styles.info}>
              {condition && (
                <li>
                  <span>{condition}</span>
                </li>
              )}
              {field && (
                <li>
                  <span>{field}</span>
                </li>
              )}
              <li>
                <span>~{expiry_date}</span>
              </li>
              <li>
                <span>조회 {views}</span>
              </li>
            </ul>
          </div>
          {/* bookmark */}
          <button className={styles.bookmark}>
            <i className="fa-solid fa-bookmark"></i>
            <p>0</p>
          </button>
        </li>
      </ul>
    </section>
  )
}

export default activityInfoCard
