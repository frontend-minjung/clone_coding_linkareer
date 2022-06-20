import React, { useState } from 'react'
import styles from './best_board.module.css'
import BoardCard from '../board_card/board_card'

const BestBoard = () => {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: '요즘 이런것도 마케팅임??',
      writer: '익명',
      enroll_date: '2022-05-30',
      views_count: 991,
      recommends_count: 1,
      scraps_count: 1,
      comments_count: 8,
    },
    {
      id: 2,
      title: '사회생활하면서 만난 빌런 중에 의외',
      writer: '익명',
      enroll_date: '2022-05-30',
      views_count: 616,
      recommends_count: 8,
      scraps_count: 4,
      comments_count: 15,
    },
    {
      id: 3,
      title: '인턴하면서 정리했던 것 공유할게!',
      writer: '익명',
      enroll_date: '2022-05-30',
      views_count: 1153,
      recommends_count: 26,
      scraps_count: 44,
      comments_count: 15,
    },
  ])

  return (
    <section className={styles.container}>
      {/* title */}
      <div className={styles.title}>
        <p className={styles.headerTitle}>BEST 인기글</p>
        <button className={styles.button}>
          <span>더보기</span>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      {boards.map((board) => (
        <BoardCard key={board.id} board={board} />
      ))}
    </section>
  )
}

export default BestBoard
