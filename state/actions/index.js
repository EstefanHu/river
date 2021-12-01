import * as authActions from './auth'
import * as devotionalActions from './devotional'
import * as draftActions from './draft'
import * as modalActions from './modal'
import * as poemActions from './poem'
import * as postActions from './post'
import * as storyActions from './story'

const mainActions = {
	...authActions,
	...devotionalActions,
	...modalActions,
	...poemActions,
	...postActions,
	...storyActions
}

export default mainActions