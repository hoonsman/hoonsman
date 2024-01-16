import React from 'react'
import Styles from './loadingspinner.module.css'

export default function LoadingSpinner({ size }) {
    return (
        <div
            className={Styles.container}
            style={{
                width: `${size.width}px`,
                height: `${size.height}px`,
            }}
        >
            <div className={Styles.spinner}> </div>
        </div>
    )
}
