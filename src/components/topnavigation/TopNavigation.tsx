import React from 'react'
import styles from './topnavigation.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggle } from '../themetoggle/ThemeToggle'
import { AuthLinks } from '../authlinks/AuthLinks'

export function TopNavigation() {

    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png" alt="facebook" width={24} height={24}/>
                <Image src="/instagram.png" alt="instagram" width={24} height={24}/>
                <Image src="/tiktok.png" alt="tiktok" width={24} height={24}/>
                <Image src="/youtube.png" alt="youtube" width={24} height={24}/>
            </div>
            <div className={styles.logo}>
                Dyal Recipe Book
            </div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/login">Login</Link>
                <AuthLinks />
            </div>
        </div>
    )
}