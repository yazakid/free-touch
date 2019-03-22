import {
  HOME_INFO
} from '@constants/home'

const INITIAL_STATE = {
  homeInfo: {}
}

export default function home(state = INITIAL_STATE, action) {
  switch(action.type) {
    case HOME_INFO: {
      return {
        ...state,
        homeInfo: action.payload
      }
    }
   
    default:
      return state
  }
}
