import React, { useState } from 'react'
import styles from './popularity_recruit.module.css'
import PopularityCard from '../popularity_card/popularity_card'

const PopularityRecruit = () => {
  const [recruits, setRecruits] = useState([
    {
      id: 1,
      bookmark: 157,
      title: '청년 Hy-Five 7기 채용',
      company: 'SK하이닉스',
      expiry_date: '2022-12-31', // 현재일, 만료일 계산하여 d-day계산 로직 작성 필요
      views: 3943, // 3자리마다 콤마넣는 서비스 레이어 로직 작성 필요
      comments: 0,
    },
    {
      id: 2,
      bookmark: 10,
      title: '[캐시워크]광고팀 채용전환형 인턴',
      company: '넛지헬스케어 주식회사',
      expiry_date: '2022-11-25', // 현재일, 만료일 계산하여 d-day계산 로직 작성 필요
      views: 393, // 3자리마다 콤마넣는 서비스 레이어 로직 작성 필요
      comments: 0,
    },
  ])

  return (
    <section className={styles.section}>
      <p className={styles.headerTitle}>실시간 인기 채용</p>
      <ul className={styles.items}>
        {recruits.map((recruit) => (
          <PopularityCard key={recruit.id} recruit={recruit} />
        ))}
      </ul>
    </section>
  )
}

export default PopularityRecruit
