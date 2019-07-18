
import BaseView from 'frontend/Containers/BaseView'
import React, { Component } from 'react'
import {
  StyleSheet, View, BackHandler,
  TouchableOpacity, Text
} from 'react-native'
import { connect } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'
import { THEME_DEFAULT, ISIOS } from 'utils/globalStyles'
import PropTypes from 'prop-types'
import { actionsType, RouteKey } from 'utils/globalConstants'
import { getActiveScreen } from 'utils/globalFunctions'

class Home extends Component {
  constructor (props) {
    super(props)
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    this.counter = 0
  }

  componentDidMount () {
    if (ISIOS) {
      SplashScreen.hide()
    } else {
      setTimeout(() => SplashScreen.hide(), 100)
    }
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    const { navigate } = this.props
    const activeRoute = getActiveScreen(navigate)
    if (activeRoute.routeName === RouteKey.HomeScreen) {
      BackHandler.exitApp()
      return true
    } else {
      this.props.back()
      return true
    }
  }

  render () {
    console.log('main screen render: ', this.counter++)
    return (
      <BaseView
      >
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.updateInternet(!this.props.internet)}>
            <Text>Update Internet</Text>
          </TouchableOpacity>
          <Text>{this.props.internet ? 'on' : 'off'}</Text>
          <TouchableOpacity onPress={() => this.props.updatePrompt({
            isShow: !this.props.prompt.isShow,
            message: 'message'
          })}>
            <Text>Update Prompt</Text>
          </TouchableOpacity>
        </View>
      </BaseView>
    )
  }
}

const mapStateToProps = (state) => ({
  navigate: state.navigate,
  internet: state.internet,
  prompt: state.prompt
})
const mapactionsTypeToProps = (dispatch) => ({
  backToTop: () => dispatch({ type: actionsType.POP_TO_TOP }),
  back: () => dispatch({ type: actionsType.POP }),
  updateInternet: (internet) => dispatch({ type: actionsType.UPDATE_INTERNET_STATUS, payload: internet }),
  updatePrompt: (payload) => dispatch({ type: actionsType.UPDATE_PROMPT,
    payload: payload
  })
})
export default connect(mapStateToProps, mapactionsTypeToProps)(Home)

Home.defaultProps = {
  navigation: {},
  back: () => {}
}

Home.propTypes = {
  navigation: PropTypes.object,
  back: PropTypes.func
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME_DEFAULT.colorPrimary
  }
})
