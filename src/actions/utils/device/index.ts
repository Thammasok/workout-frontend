import generator from 'generate-password'
import * as ls from 'local-storage'
import dayjs from 'dayjs'
import { xaDeviceModel } from '@Actions/utils/device/Model'

export const xaDevice = {
  // GetDeviceId () : Promise<Return Type> {
  //    return new Promise(resolve => { })
  // }
  GetDeviceId: (): Promise<xaDeviceModel.DeviceId.GetResponse> => {
    return new Promise(resolve => {
      const deviceId: xaDeviceModel.DeviceId.GetResponse = ls.get<string>('d')

      if (!deviceId) {
        const toDay: string = dayjs().format('YYYYMMDD')
        const deviceCode: string = generator.generate({
          length: 20,
          uppercase: true,
          numbers: true
        })

        const newDeviceId = toDay + '-' + deviceCode
        ls.set('d', newDeviceId)
        resolve(newDeviceId)
      } else {
        resolve(deviceId)
      }
    })
  }
}
