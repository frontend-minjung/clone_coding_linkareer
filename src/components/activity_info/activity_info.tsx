import React, { useState } from 'react'
import styles from './activity_info.module.css'
import ActivityInfoCard from '../activity_info_card/activity_info_card'

const ActivityInfo = () => {
  const [activities, setActivities] = useState([
    {
      id: 1,
      activity_category: '채용',
      company: 'SPC GFS',
      title: 'SPC GFS 경영기획',
      condition: '경력',
      field: '경영/사무',
      expiry_date: '2022-06-12',
      views: 13,
    },
    {
      id: 2,
      activity_category: '채용',
      company: '민병철교육그룹',
      title: '민병철교육그룹 콘텐츠 기획',
      condition: '경력, 신입',
      field: '각 부문',
      expiry_date: '2022-06-12',
      views: 6,
    },
    {
      id: 3,
      activity_category: '채용',
      company: '삼일회계법인',
      title: '삼일회계법인 IT운영/개발업무',
      condition: '신입',
      field: 'IT/개발',
      expiry_date: '2022-07-31',
      views: 5,
    },
    {
      id: 4,
      activity_category: '대외활동',
      company: '(사)국제청소년연합 경인지부',
      title: '10기 세계 장관 포럼 의전 및 통역 참가단',
      condition: '',
      field: '',
      expiry_date: '2022-06-17',
      views: 100,
    },
  ])

  return (
    <section className={styles.section}>
      <p className={styles.headerTitle}>실시간 활동정보</p>
      {activities.map((activity) => (
        <ActivityInfoCard key={activity.id} activity={activity} />
      ))}
    </section>
  )
}

export default ActivityInfo
