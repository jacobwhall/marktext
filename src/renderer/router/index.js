import App from '../pages/app.vue'
import Preference from '../pages/preference.vue'
import General from '../prefComponents/general/index.vue'
import Editor from '../prefComponents/editor/index.vue'
import Markdown from '../prefComponents/markdown/index.vue'
import SpellChecker from '../prefComponents/spellchecker/index.vue'
import Theme from '../prefComponents/theme/index.vue'
import Image from '../prefComponents/image/index.vue'
import Keybindings from '../prefComponents/keybindings/index.vue'

const parseSettingsPage = type => {
  let pageUrl = '/preference'
  if (/\/spelling$/.test(type)) {
    pageUrl += '/spelling'
  }
  return pageUrl
}

const routes = type => ([{
  path: '/', redirect: type === 'editor' ? '/editor' : parseSettingsPage(type)
}, {
  path: '/editor', component: App
}, {
  path: '/preference',
  component: Preference,
  children: [{
    path: '', component: General
  }, {
    path: 'general', component: General, name: 'general'
  }, {
    path: 'editor', component: Editor, name: 'editor'
  }, {
    path: 'markdown', component: Markdown, name: 'markdown'
  }, {
    path: 'spelling', component: SpellChecker, name: 'spelling'
  }, {
    path: 'theme', component: Theme, name: 'theme'
  }, {
    path: 'image', component: Image, name: 'image'
  }, {
    path: 'keybindings', component: Keybindings, name: 'keybindings'
  }]
}])

export default routes
