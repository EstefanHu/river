import React from 'react'
import Image from 'next/image'

import styles from './Auth.module.scss'

const Auth = () => {

    return (
        <div className={styles.Auth}>
            <header>
                <h1 className={styles.Logo}><span>the</span>River</h1>

            </header>

            <div className={styles.Left}/>

            <div className={styles.right}>
                
            </div>
        </div>
    )
}

export default Auth