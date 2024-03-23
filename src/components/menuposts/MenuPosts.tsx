import React from 'react'
import Link from 'next/link'
import styles from './menuposts.module.css'
import Image from 'next/image'

export const MenuPosts = ({ withImage }) => {
    
    return (
        <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    { withImage && (
                        <div className={styles.imageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                        </div>
                    )}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.dinner}`}>
                            Dinner
                        </span>
                        <h3 className={styles.postTitle}>
                            Tacos
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}> - 11.02.2023</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    { withImage && (
                        <div className={styles.imageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                        </div>
                    )}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.dinner}`}>
                            Dinner
                        </span>
                        <h3 className={styles.postTitle}>
                            Tacos
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}> - 11.02.2023</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    { withImage && (
                        <div className={styles.imageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                        </div>
                    )}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.dinner}`}>
                            Dinner
                        </span>
                        <h3 className={styles.postTitle}>
                            Tacos
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}> - 11.02.2023</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    { withImage && (
                        <div className={styles.imageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                        </div>
                    )}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.dinner}`}>
                            Dinner
                        </span>
                        <h3 className={styles.postTitle}>
                            Tacos
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}> - 11.02.2023</span>
                        </div>
                    </div>
                </Link>
            </div>
    )
}