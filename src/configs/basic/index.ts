import getConfig from 'next/config'

import { xcoBasicModel } from '@Configs/basic/Model'

const { publicRuntimeConfig } = getConfig()

export const xcoBasic = {
  GetBasic: (): xcoBasicModel.Response => {
    const config = {
      project_id: 'ICS-jYdS4-M7hYzt',
      timezone: publicRuntimeConfig.TIMEZONE || 'Asia/Bangkok',
      redirect: {
        homepage: '/'
      },
      default: {
        image: {
          logo_default:
            'https://fs.ichob.co/v1/external?path=logo/ichob-logo-master-app-v1',
          image_default: 'https://fs.ichob.co/v1/external?path=default/profile',
          init_image:
            'https://fs.chomchob.com/file/image?path=/admin/upload/2020-01-08/04fe33ce-5a89-4da5-afaa-2fad30d7c6d0',
          badged:
            'https://fs.chomchob.com/file/image?path=/admin/upload/2020-06-24/8726e2fd-50d1-4c08-a12c-e68c8fefbcf3'
        },
        start: {
          year: 2020
        }
      }
    }

    return config
  }
}
