import React, { useState } from 'react'
import { useGlobalState } from '../../../../state'

import WriteWrapper from '../../../../wrappers/writeWrapper'

import styles from './Poem.module.scss'

const Poem = () => {
	const { state: { poem: { poemErrorMessage } },
		addNewPoem,
		addPoemErrorMessage,
		clearPoemErrorMessage
	} = useGlobalState()
	const [formData, setFormData] = useState({
		title: '',
		body: '',
	})

	const handleSubmit = async e => {
		e.preventDefault()
		console.log("SENDING TO DATABASE")
		await addNewPoem(formData)
		console.log('COMPLETED DATABASE ENTRY')
	}

	return (
		<WriteWrapper>
			<div className={styles.Poem}>
				<h1>New Poem</h1>

				<form onSubmit={handleSubmit}>
					<p>{poemErrorMessage}</p>
					<span>
						<label>title:</label>
						<input
							type="text"
							value={formData.title}
							onChange={e => setFormData({
								...formData,
								title: e.target.value
							})}
						/>
					</span>

					<span>
						<label>body:</label>
						<textarea
							value={formData.body}
							onChange={e => setFormData({
								...formData,
								body: e.target.value
							})}
						>

						</textarea>
					</span>

					<input type='submit' value='submit' />
				</form>
			</div>
		</WriteWrapper>
	)
}

export default Poem