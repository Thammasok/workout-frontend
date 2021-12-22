// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

// Local
import Reducers from '@Reducers'

declare global {
  interface Window {
    __REDUX_DEVTOOL_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__) ||
  compose

const makeStore: MakeStore<any> = (context: Context) => {
  let middlewares: Array<any> = []
  const initialState = {}

  // middlewares = [thunkMiddleware, createLogger()]
  if (process.env.NODE_ENV === 'production') {
    middlewares = [thunkMiddleware]
  } else {
    middlewares = [thunkMiddleware, createLogger()]
  }

  return createStore(
    Reducers,
    initialState,
    composeEnhancers(composeWithDevTools(applyMiddleware(...middlewares)))
  )
}

export const wrapper = createWrapper<any>(makeStore, {
  debug: process.env.NODE_ENV !== 'production'
})
