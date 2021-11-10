import * as authActions from './auth'
import * as devotionActions from './devotion'
import * as poetryActions from './poetry'
import * as storyActions from './story'

export default {
    ...authActions,
    ...devotionActions,
    ...poetryActions,
    ...storyActions
}