import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'y97sz72e',
    dataset: 'production'
  },
  deployment: {
    appId: 'lqii1fvbq6wruqebfs9oe9wm',
    autoUpdates: true,
  }
})
