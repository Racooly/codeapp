import styles from './page.module.css'
import Image from 'next/image'
import hero from 'public/hero.png'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}> Better design for your digital products.</h1>
        <p className={styles.desc}>
          Turning you idea into Reality. We bring together the teams from the global tech industry.
        </p>
        <Button title={'See our works'}/>
      </div>
      <div className={styles.item}>
        <Image src={hero} alt='hero' className={styles.img} />
      </div>
    </main>
  )
}
