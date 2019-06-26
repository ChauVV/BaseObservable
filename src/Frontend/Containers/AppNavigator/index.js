import { createStackNavigator } from 'react-navigation'
import {
  createReactNavigationReduxMiddleware,
  reduxifyNavigator
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import transition from './transitions'

import HomeScreen from 'frontend/Screens/Home'

const middlewareNav = createReactNavigationReduxMiddleware(
  'root',
  (state) => state.navigate
)

const RootNavigator = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen }
  }, {
    headerMode: 'none',
    transitionConfig: transition
  }
)

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root')

const mapStateToProps = (state) => ({
  state: state.navigate
})

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState)

export { RootNavigator, AppNavigator, middlewareNav }
