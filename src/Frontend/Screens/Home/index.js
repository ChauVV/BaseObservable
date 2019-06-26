
import BaseView from 'frontend/Containers/BaseView'
import React, { Component } from 'react'
import {
  StyleSheet, View, BackHandler, ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'
import { THEME_DEFAULT, ISIOS, scale } from 'utils/globalStyles'
import PropTypes from 'prop-types'
import { actionsType, RouteKey } from 'utils/globalConstants'
import { getActiveScreen } from 'utils/globalFunctions'

class Home extends Component {
  constructor (props) {
    super(props)
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
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
    return (
      <BaseView
        isHeader
        title='Demo'
      >
        <ScrollView>
          <View style={styles.container}>
          </View>
        </ScrollView>
      </BaseView>
    )
  }
}

const mapStateToProps = (state) => ({
  navigate: state.navigate
})
const mapactionsTypeToProps = (dispatch) => ({
  backToTop: () => dispatch({ type: actionsType.POP_TO_TOP }),
  back: () => dispatch({ type: actionsType.POP })
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
    backgroundColor: THEME_DEFAULT.colorPrimary,
    paddingBottom: scale(15)
  }
})
