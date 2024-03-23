import Image from 'next/image'
import React from 'react'
import { Pagination } from '../pagination/Pagination'
import styles from './cardlist.module.css'

export const CardList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}> Recent Posts</h1>
                <div className={styles.posts}>
                    <div className={styles.post}>
                        <div className={styles.imageContainer}>
                            <Image src="/p1.jpeg" alt="" />
                        </div>
                    </div>
                </div>
            <Pagination />
        </div>
    )
}