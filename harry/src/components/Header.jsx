import React from 'react'
import Styles from './header.module.css'

export default function Header() {
    return (
        <div className={Styles.container}>
            <div className={Styles.left}>
                <div className={Styles.icon}>hoonsman</div>
            </div>
            <div className={Styles.right}>
                <div className={Styles.btn}>sign in</div>
                <div className={Styles.btn}>sign up</div>
            </div>
        </div>
    )
}
