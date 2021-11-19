import React, { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useStateValue } from '../state'

import styles from './Modals.module.scss'

const Modals = ({ children }) => {
    const modalRef = useRef(null)
    const closeRef = useRef(null)
    const {
        state: { modal: { selectedModal } },
        closeModal
    } = useStateValue()


    return (
        <div
            ref={modalRef}
            className={`${styles.ModalWrapper} ${selectedModal && styles.Toggled}`}
            onClick={e => { if (e.target === modalRef.current) closeModal() }}
        >
            <div className={`${styles.Modal} ${selectedModal && styles.Toggled}`}>
                <p
                    ref={closeRef}
                    className={styles.ModalCloser}
                    onClick={e => { if (e.target === closeRef.current) closeModal() }}
                >&#x2715;</p>
                {children}
            </div>
        </div>
    )
}

export default Modals
