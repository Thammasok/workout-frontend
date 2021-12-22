import axios from 'axios'

// Interface
import { xsAuthAnonymousServiceModel } from '@Services/Auth/Anonymous/Model'

// Config
import { xcoService } from '@Configs'
import { xaPlatform } from '@Actions/Platform/Basic'
import { xaDevice } from '@Actions/Utils/Device'

export const AnonymousService = {
  GetAnonymousToken:
    async (): Promise<xsAuthAnonymousServiceModel.GetAnonymousResponse> => {
      let response: xsAuthAnonymousServiceModel.GetAnonymousResponse

      const deviceId = await xaDevice.GetDeviceId()
      const platformData = await xaPlatform.GetPlatformBasic()
      const platformId = platformData
        ? platformData.platform?.platform_id
        : null

      try {
        const responseData =
          await axios.get<xsAuthAnonymousServiceModel.GetAnonymousResponseSuccess>(
            `${xcoService.GetService().user}/v1/auth/token/anonymous`,
            {
              headers: {
                'Platform-Id': platformId,
                'Device-Id': deviceId
              }
            }
          )

        response = {
          status: responseData.status,
          loadFrom: 'server',
          anonymous: responseData.data
        }
        response.status = 200
      } catch (error: any) {
        const err = error.toJSON()
        if (err.message === 'Network Error') {
          response = {
            status: 500,
            loadFrom: 'server',
            error: err
          }
        } else {
          response = {
            status: error.response.status,
            loadFrom: 'server',
            error: error.response.data
          }
        }
      }

      return response
    }
}
