import React, { useState } from 'react'
import { useStateValue } from '../../../state'

import styles from './Form.module.scss'

const Form = () => {
    const [hasAccount, setHasAccount] = useState(true)

    return (
        <div className={styles.Form}>
            
        </div>
    )
}

export default Form