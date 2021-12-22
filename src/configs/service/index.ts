import getConfig from 'next/config'

import { xcoServiceModel } from '@Configs/service/Model'

const { publicRuntimeConfig } = getConfig()

export const xcoService = {
  GetService: (): xcoServiceModel.Response => {
    const serviceOn =
      publicRuntimeConfig.NODE_ENV_SERVICE === 'production'
        ? 'https://'
        : 'https://dev-'

    const config = {
      general: `${serviceOn}general.ichob.co`,
      file: `${serviceOn}fs.ichob.co`,
      user: `${serviceOn}user.ichob.co`,
    }

    return config
  }
}
