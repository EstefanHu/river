import * as authActions from './auth'
import * as devotionActions from './devotion'
import * as modalActions from './modal'
import * as poetryActions from './poetry'
import * as storyActions from './story'

const actions = {
    ...authActions,
    ...devotionActions,
    ...modalActions,
    ...poetryActions,
    ...storyActions
}

export default actions