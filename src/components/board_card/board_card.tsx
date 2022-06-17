import React from 'react'
import styles from './board_card.module.css';
import NumberService from '../../service/number_service';

const numberService = new NumberService();
const boardCard = ({board}) => {
  const {
    id,
    title,
    writer,
    enroll_date,
    views_count,
    recommends_count,
    scraps_count,
    comments_count
  } = board;

  return (
      <div className={styles.cards}>
        <ul className={styles.card}>
            <li>
                <div>
                    <span className={styles.title}>{title}</span>
                </div>
                <div className={styles.writerInfo}>
                    <span className={styles.writer}>{writer}</span>
                    <span className={styles.date}>{numberService.convertDashToDot(enroll_date)}</span>
                </div>
                <div className={styles.boardInfo}>
                    <span className={styles.view}>조회수 {views_count}</span>
                    <span className={styles.recommend}>추천수 {recommends_count}</span>
                    <span className={styles.scrap}>스크랩수 {scraps_count}</span>
                </div>
            </li>
                <li></li>
            <li className={styles.wrapper}>
                <img src='https://picsum.photos/id/237/80'/>
                <button className={styles.comment}>
                    <p>{comments_count}</p>
                    <p>댓글</p>
                </button>
            </li>
        </ul>
      </div>
  )
}

export default boardCard