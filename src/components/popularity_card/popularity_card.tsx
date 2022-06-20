import React from 'react'
import styles from './popularity_card.module.css'
import NumberService from '../../service/number_service'

const numberService = new NumberService()
const PopularityCard = ({ recruit }) => {
  const { id, bookmark, title, company, expiry_date, views, comments } = recruit

  return (
    <>
      <li>
        <div className={styles.image}>
          <img src="https://picsum.photos/250" />
          <button className={styles.imageButton}>
            <i className="fa-solid fa-bookmark"></i>
            <span>{bookmark}</span>
          </button>
        </div>
        <a className={styles.title}>{title}</a>
        <p className={styles.company}>{company}</p>
        <ul className={styles.info}>
          <li>
            <span>D-{numberService.calculateExpiryDate(expiry_date)}</span>
          </li>
          <li>
            <span>조회 {numberService.inputComma(views)}</span>
          </li>
          <li>
            <span>댓글 {comments}</span>
          </li>
        </ul>
      </li>
    </>
  )
}

export default PopularityCard
