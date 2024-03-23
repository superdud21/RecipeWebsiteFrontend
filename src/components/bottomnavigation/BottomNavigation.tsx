import React from 'react'
import styles from './bottomnavigation.module.css'
import Image from 'next/image'
import Link from 'next/link'

export const BottomNavigation = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src="/logo.png" alt='recipe book' width={50} height={50} />
                    <h1 className={styles.logoText}>Recipe Book</h1>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eos sunt itaque, dolor sit assumenda explicabo numquam inventore culpa cum neque doloribus in earum? Ut fugiat quam est? Minus, fugiat!
                </p>
                <div className={styles.icons}>
                    <Image src="/facebook.png" alt="" width={18} height={18} />
                    <Image src="/instagram.png" alt="" width={18} height={18} />
                    <Image src="/tiktok.png" alt="" width={18} height={18} />
                    <Image src="/youtube.png" alt="" width={18} height={18} />
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span>Links</span>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Recipes</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div className={styles.list}>
                    <span>Links</span>
                    <Link href="/">Dinner</Link>
                    <Link href="/">Breakfast</Link>
                    <Link href="/">Dessert</Link>
                    <Link href="/">Lunch</Link>
                </div>
                <div className={styles.list}>
                    <span>Links</span>
                    <Link href="/">Facebook</Link>
                    <Link href="/">Instagram</Link>
                    <Link href="/">Tiktok</Link>
                    <Link href="/">Youtube</Link>
                </div>
            </div>
        </div>
    )
}