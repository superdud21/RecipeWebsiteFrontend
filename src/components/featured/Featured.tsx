import Image from 'next/image'
import React from 'react'
import styles from './featured.module.css'

export const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Lots of Recipes</b>
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Slow Cooker Roast</h1>
                    <p className={styles.postDescription}>Easy roast recipe that you can just set and forget.</p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}