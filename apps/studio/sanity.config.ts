import {defineConfig, isDev } from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {
  dashboardTool,
  projectUsersWidget,
  projectInfoWidget,
} from "@sanity/dashboard";
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'jobshunt',

  projectId: '75ibwx4v',
  dataset: isDev ? 'developement' : 'production',

  plugins: [
    deskTool(), 
    visionTool(),
    dashboardTool({
      widgets: [
        projectUsersWidget(),
        projectInfoWidget()
      ]
    })
  ],

  schema: {
    types: schemaTypes,
  },
})
