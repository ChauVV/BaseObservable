import DeviceInfo from 'react-native-device-info'
import Images from 'assets/Images'

// const ProductUrl = 'https://prd-luyenthi-api.generali-life.com.vn'
const UATUrl = 'https://uat-luyenthi-api.generali-life.com.vn'

export const BaseURL = process.env['NODE_ENV'] === 'development' ? UATUrl : UATUrl

export const RouteKey = {
  HomeScreen: 'HomeScreen',
}
export const KeyStore = {
  USER_DATA: 'USER_DATA'

}
export const isTablet = DeviceInfo.isTablet()
// Redux
export const actionsType = {
  UPDATE_INTERNET_STATUS: 'UPDATE_INTERNET_STATUS',
  UPDATE_START_TIMER: 'UPDATE_START_TIMER',

  SHOW_NOTIFICATION: 'SHOW_NOTIFICATION',
  OFF_NOTIFICATION: 'OFF_NOTIFICATION',

  // Prompt
  UPDATE_PROMPT: 'UPDATE_PROMPT',

  // NAVIGATION
  PUSH: 'push',
  POP: 'pop',
  POP_TO_TOP: 'popToTop',
  RESET_TO_ROUTE: 'resetToRoute',
  RESET: 'reset',
  CLEAR: 'clear'
}
export const initState = {
  currency: 'VND',
  language: 'vi'
}
/**
 * statusCode
 */
export const statusCode = {
  CODE_200: 200, // ok
  CODE_201: 201, // ok
  CODE_404: 404, // Not found
  CODE_500: 500 // Server error
}
