declare namespace xsAuthAnonymousServiceModel {
  export interface Headers {
    'Platform-Id': number
    'Device-Id': string
  }

  // export interface GetAnonymousPayload {}

  export interface GetAnonymousResponseSuccess {
    token: string
    token_expire_at: string
  }

  export interface GetAnonymousResponse {
    status: number
    loadFrom: string
    anonymous?: GetAnonymousResponseSuccess
    error?: any
  }

  // export type GetResponseTypes =
  //   | GetAnonymousResponseSuccess
  //   | GetAnonymousResponseFail
}

export { xsAuthAnonymousServiceModel }
