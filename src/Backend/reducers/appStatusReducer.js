import { actionsType } from 'utils/globalConstants'
// const SimpleStore = require('react-native-simple-store')

const appStatus = {
  isLoading: false
}

export default (state = appStatus, action) => {
  switch (action.type) {
  case actionsType.UPDATE_APP_STATUS:
    return action.payload

  default:
    return state
  }
}
