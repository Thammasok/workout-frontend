declare namespace xaHandleResponseModel {
  namespace Clear {
    export interface GetPayload {
      type: String
      dispatch: Function
    }

    export interface GetResponse {}
  }

  namespace Success {
    export interface GetPayload {
      type: String
      dispatch: Function
      payload: any
    }

    export interface GetResponse {}
  }

  namespace Error {
    export interface GetPayload {
      type: String
      errorPage: Boolean
      dispatch: Function
      error: any
      attach?: any
    }

    export interface GetResponse {
      msg: string
    }
  }
}

export { xaHandleResponseModel }
