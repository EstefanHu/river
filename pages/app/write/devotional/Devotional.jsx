import React, { useState } from 'react'

import WriteWrapper from '../../../../wrappers/writeWrapper'

import styles from './Devotional.module.scss'

const Devotional = () => {
	const [formData, setFormData] = useState({
		verse: '',
		verseBody: '',
		devotional: '',
	})

	const handleSubmit = e => {
		e.preventDefault()
		console.log(formData)
	}

	return (
		<WriteWrapper>
			<section className={styles.Devotional}>
				<h1>New Devotional</h1>

				<form onSubmit={handleSubmit}>
					<span>
						<label>verse:</label>
						<input
							type="text"
							value={formData.verse}
							onChange={e => setFormData({
								...formData,
								verse: e.target.value
							})}
						/>
					</span>

					<span>
						<label>verse body:</label>
						<input
							type="text"
							value={formData.verseBody}
							onChange={e => setFormData({
								...formData,
								verseBody: e.target.value
							})}
						/>
					</span>

					<span>
						<label>devotional:</label>
						<textarea
							value={formData.devotional}
							onChange={e => setFormData({ ...formData, devotional: e.target.value })}
						></textarea>
					</span>

					<input type='submit' value='submit' />
				</form>
			</section>
		</WriteWrapper>
	)
}

export default Devotional