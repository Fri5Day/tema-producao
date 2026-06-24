// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Material Design Icons
import '@mdi/font/css/materialdesignicons.css'
import { mdi } from 'vuetify/iconsets/mdi'

//Themes
import { DarkTheme } from '@/theme/DarkTheme';
import { LightTheme } from '@/theme/LightTheme';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'LightTheme',
    themes: {
      LightTheme,
      DarkTheme,
    },
  },
})

export default vuetify
