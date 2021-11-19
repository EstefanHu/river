import * as authActions from './auth'
import * as devotionActions from './devotion'
import * as draftActions from './draft'
import * as modalActions from './modal'
import * as poetryActions from './poetry'
import * as postActions from './post'
import * as storyActions from './story'

const actions = {
	...authActions,
	...devotionActions,
	...modalActions,
	...poetryActions,
	...postActions,
	...storyActions
}

export default actions