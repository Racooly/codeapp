import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'

const data = [
  {
    id: 0,
    name: "Creative Portfolio",
    src: "https://images.pexels.com/photos/19287812/pexels-photo-19287812/free-photo-of-black-and-white-photo-of-a-cow-laying-down.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 1,
    name: "Minimal Single Product",
    src: "https://images.pexels.com/photos/19396221/pexels-photo-19396221/free-photo-of-winters-coming.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Strong Together Charity",
    src: "https://images.pexels.com/photos/19381650/pexels-photo-19381650/free-photo-of-a-squirrel-sitting-on-a-tree-stump.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

function Category({params}) {

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      
      {data.map(cat =>(
        <div key={cat.id} className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>{cat.name}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptas libero omnis tempore pariatur iste explicabo numquam harum? Rem aspernatur nobis provident harum id eaque dolorem nulla accusamus veniam? Inventore.Rem aspernatur nobis provident harum id eaque dolorem nulla accusamus veniam? Inventore.
          </p>
          <Button title={'see more'}/>
        </div>
        <div className={styles.imgContainer}>
        <Image
              className={styles.img}
              alt="portfolio image"
              fill={true}
              src={cat.src}
            />
        </div>
      </div>
      ))}
    </div>
  )
}

export default Category