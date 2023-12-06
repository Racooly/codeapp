import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className={styles.container}>
        <div>@All rights reserved</div>
        <div className={styles.socialNetworks}>
          <Link href={'https://www.facebook.com/'} target={'_blank'}><Image src='/1.png' width ={15} height ={15} className={styles.icon} alt='fb'/></Link>
          <Link href={'https://www.instagram.com/'} target={'_blank'}><Image src='/2.png' width ={15} height ={15} className={styles.icon} alt='insta'/></Link>
          <Link href={'https://www.X.com/'} target={'_blank'}><Image src='/3.png' width ={15} height ={15} className={styles.icon} alt='X'/></Link>
          <Link href={'https://www.youtube.com/'} target={'_blank'}><Image src='/4.png' width ={15} height ={15} className={styles.icon} alt='Youtube'/></Link>
        </div>
    </div>
    
  )
}

export default Footer