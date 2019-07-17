import { push } from 'connected-react-router'

const initialState = {}

/* eslint-disable no-case-declarations */

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const historyPush = (url) => {
  return (dispatch) => {
    dispatch(push(url))
  }
}
