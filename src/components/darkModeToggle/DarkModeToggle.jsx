'use client'

import React from 'react'
import styles from './darkmodeToggle.module.css'

function DarkModeToggle() {
  return (
    <div className={styles.container} onClick={() => console.log('hello')}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div className={styles.ball} />
    </div>
  )
}

export default DarkModeToggle