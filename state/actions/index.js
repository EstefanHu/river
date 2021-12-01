import * as authActions from './auth'
import * as devotionActions from './devotion'
import * as draftActions from './draft'
import * as modalActions from './modal'
import * as poemActions from './poem'
import * as postActions from './post'
import * as storyActions from './story'

const mainActions = {
	...authActions,
	...devotionActions,
	...modalActions,
	...poemActions,
	...postActions,
	...storyActions
}

export default mainActions