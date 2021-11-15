import React from 'react'
import { useRouter } from 'next/router'

import styles from './AppWrapperHeader.module.scss'

const AppWrapperHeader = () => {
    const router = useRouter()
    console.log(router.pathname)
    // const isWriting = useRouter().route ===

    return (
        <header className={styles.AppWrapperHeader}>
            <h1 className={styles.Logo}>R</h1>

            {router.pathname.includes('write')
                ? <button
                    type="button"
                    onClick={() => null}
                >save</button>
                : <button
                    type="button"
                    onClick={() => null}
                >write</button>
            }
        </header>
    )
}

export default AppWrapperHeader