"use client"
import Link from 'next/link'
import React from 'react'
import styles from './authlinks.module.css'

export const AuthLinks = () => {
    const [open, setOpen] = React.useState(false);
    const status: boolean = false;

    return (
        <>
            {!status ? (
                <Link href="/login" className={styles.link}>Login</Link>
            ) : (
                <>
                    <Link href="/create_new" className={styles.link}>Create New</Link>
                    <span className={styles.link}>Logout</span>
                </>
            )}
            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {open && (
                <div className={styles.responsiveMenu}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>

                    {!status ? (
                        <Link href="/login">Login</Link>
                    ) : (
                        <>
                            <Link href="/create_new">Create New</Link>
                            <span className={styles.link}>Logout</span>
                        </>
                    )}
                </div>
            )}
        </>
    );
};