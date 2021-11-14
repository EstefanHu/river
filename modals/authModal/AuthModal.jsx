import React from 'react'
import { useStateValue } from '../../state'

import styles from './AuthModal.module.scss'

const AuthModal = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <form
            className={styles.AuthModal}
            onSubmit={handleSubmit}
        >
            <span>
                <label>email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </span>

            <span>
                <label>password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </span>

            <input
                type="submit"
                value="login"
            />
        </form>
    )
}

export default AuthModal