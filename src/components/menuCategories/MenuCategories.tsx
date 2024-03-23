import React from "react";
import styles from './menuCategories.module.css'
import Link from "next/link";

export const MenuCategories = () => {
    
    return (
        <div className={styles.categoryList}>
            <Link href="/blog?category=Dinner" className={`${styles.categoryItem} ${styles.style}`}>Dinner</Link>
            <Link href="/blog?category=Dinner" className={`${styles.categoryItem} ${styles.style}`}>Dessert</Link>
            <Link href="/blog?category=Dinner" className={`${styles.categoryItem} ${styles.style}`}>Breakfast</Link>
            <Link href="/blog?category=Dinner" className={`${styles.categoryItem} ${styles.style}`}>Equipment</Link>
            <Link href="/blog?category=Dinner" className={`${styles.categoryItem} ${styles.style}`}>Middle Eastern</Link>
            <Link href="/blog?category=Dinner" className={`${styles.categoryItem} ${styles.style}`}>Utah</Link>
        </div>
    )
}