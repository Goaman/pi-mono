import DefaultTheme from 'vitepress/theme'
import SidebarSearch from './SidebarSearch.vue'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'sidebar-nav-before': () => h(SidebarSearch)
    })
  }
}
