import React, { useState } from 'react'
import styles from './intern_board.module.css'
import BoardCard from '../board_card/board_card'

const InternBoard = () => {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: '인턴 서류 합불',
      writer: '몽구수',
      enroll_date: '2022-05-25',
      views_count: 115,
      recommends_count: 0,
      scraps_count: 0,
      comments_count: 2,
    },
    {
      id: 2,
      title: '인턴',
      writer: '취취88',
      enroll_date: '2022-05-25',
      views_count: 107,
      recommends_count: 0,
      scraps_count: 0,
      comments_count: 4,
    },
    {
      id: 3,
      title: '스타트업 1개월차 마케팅 인턴 후기',
      writer: '둔둔',
      enroll_date: '2022-05-25',
      views_count: 121,
      recommends_count: 0,
      scraps_count: 0,
      comments_count: 0,
    },
  ])

  return (
    <section className={styles.container}>
      {/* title */}
      <div className={styles.title}>
        <p className={styles.headerTitle}>인턴 talk </p>
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

export default InternBoard
