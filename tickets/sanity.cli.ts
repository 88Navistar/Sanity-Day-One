import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  server: {
    port: 3334,
  },
  app: {
    organizationId: 'oNm1OkAMN',
    entry: './src/App.tsx',
     id: 'eakosxmgrb0wl2b87ck7wzi3'
  },
  api: {
    projectId: '9zkkr2yv',
    dataset: 'production'
  },
 
})
