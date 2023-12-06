import React from 'react'
import styles from './button.module.css'
import Link from 'next/link'

function Button(props) {
  return (
    <Link href={'/'}>
        <button className={styles.button}>{props.title}</button>
    </Link>
  )
}

export default Button