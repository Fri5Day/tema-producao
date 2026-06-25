import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'
import { mdi } from 'vuetify/iconsets/mdi'

import { DEFAULT_THEME, themes } from '@/app/theme'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    sets: { mdi },
  },
  theme: {
    defaultTheme: DEFAULT_THEME,
    themes,
  },
})

export default vuetify
