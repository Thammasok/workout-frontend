import { xaHandleResponseModel } from '@Actions/utils/handle/Model'
// import { xaToken } from '../token'

export const xaHandleResponse = {
  Clear: (data: xaHandleResponseModel.Clear.GetPayload) => {
    const { type, dispatch } = data
    dispatch({
      type
    })
  },
  Success: (data: xaHandleResponseModel.Success.GetPayload) => {
    const { type, dispatch, payload } = data
    dispatch({
      type,
      payload
    })
  },
  Error: (data: xaHandleResponseModel.Error.GetPayload) => {
    const { type, dispatch, error, errorPage, attach } = data
    // 400 Normal Error
    // 401 Login / Logout token
    // 403 No permission

    if (error.data?.msg === 'Network Error') {
      // Network Error
      // url /error/500 => [,error,500]
      if (errorPage) {
        const path = window.location.pathname.split('/')
        if (path[1] !== 'error') {
          window.location.replace(
            '/error/500?redirect=' + window.location.pathname
          )
        }
      } else {
        dispatch({
          type,
          payload: {
            error: {
              err: true,
              status: 401,
              data: {
                msg:
                  "Network error or can't access the network, please try again."
              },
              ...attach
            }
          }
        })
      }
    } else {
      // Normal Error
      if (error.status === 400) {
        dispatch({
          type,
          payload: {
            error: {
              err: true,
              status: error.status,
              data: {
                ...error
              },
              msg: error.data?.msg,
              ...attach
            }
          }
        })
      } else if (error.status === 401) {
        console.log('TODO: Token Exits')
        // xaToken.SetTokenExpires()
      } else if (error.status === 403) {
        dispatch({
          type,
          payload: {
            error: {
              err: true,
              status: error.status,
              data: {
                ...error.data
              },
              ...attach
            }
          }
        })
      } else if (error.status >= 500) {
        dispatch({
          type,
          payload: {
            error: {
              err: true,
              status: error.status,
              data: {
                ...error.data
              },
              ...attach
            }
          }
        })
      } else {
        dispatch({
          type,
          payload: {
            error: {
              err: true,
              status: error.status,
              data: {
                ...error.data
              },
              ...attach
            }
          }
        })
      }
    }
  }
}
