import React from "react";
import styles from './card.module.css'
import Image from "next/image";
import Link from "next/link";

export const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023 - </span>
                    <span className={styles.category}>DINNER</span>
                </div>
                <Link href="/chicken">
                    <h1>Chicken Divan</h1>
                </Link>
                <p className={styles.desc}>Easy cheesy chicken casserole with broccoli.</p>
                <Link href="/chicken" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}