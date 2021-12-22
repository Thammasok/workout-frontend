import { xdAccessTokenConsts } from "@Definitions"
import { IAction } from "@Interfaces"
import { xrAccessTokenModel } from '@Reducers/token/Model'

const INITIAL_STATE: object = {}

export const xrAccessTokenReducer  = (
  state = INITIAL_STATE,
  action: IAction<xrAccessTokenModel.IMapPayload>
) => {
  switch (action.type) {
    case xdAccessTokenConsts.Token.Success:
      return {
        ...state,
        ...action.payload
      }
    case xdAccessTokenConsts.Token.Fail:
      return {
        ...state,
        ...action.payload
      }
    case xdAccessTokenConsts.Token.Clear:
      return INITIAL_STATE
    default:
      return state
  }
}
