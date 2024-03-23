"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './categorylist.module.css'

export const CategoryList = () => {
    const [categories, setCategories] = React.useState(['Dinner', 'Breakfast', 'Dessert', '30 or Less', 'Cheap & Easy', 'Mexican'])

    function mapCategories() {
        return categories.map((item, index) => {
            return(
                <Link href={`/recipes?category=${item}`} className={`${styles.category} ${styles.Dinner}`}> 
                    <Image src={`/${item}.png`} alt="" width={32} height={32} className={styles.image} />
                    {item}
                </Link>
            )
        })
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
                {mapCategories()}
           </div>
        </div>
    )
}