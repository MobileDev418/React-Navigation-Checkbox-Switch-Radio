/**
 * @ 2nd Screen
 */
import React, { Component } from 'react'
import { Container, Header, Left, Title, Content, Right, Icon, View, Button, Text } from 'native-base'
import { StyleSheet, BackHandler, Alert } from 'react-native'
import { connect } from 'react-redux'
import Switch from 'react-native-switch-pro'
import RadioButton from 'radio-button-react-native'
import I18n from 'react-native-i18n'
import { exitApp } from 'react-native-back-android'

import Icons from '@assets/icons'

import commonStyles from './../Styles/CommonStyles'

import { 
  setValueToArray,
  setSTonoff,
  setURIonoff,
  setSEXonoff
} from './../../services/ParamServices'
import { setInitHelp } from './../../services/HelpServices'

class ScreenOne extends Component { 

  constructor (props){
    super(props)
    this.state = {
    }
  }

  componentDidMount(){
    setInitHelp()
  }

  componentWillMount () { 
    BackHandler.addEventListener('hardwareButtonPress', () => 
    this.handleHardwareBackPress());
  } 

  handleHardwareBackPress = () => {
    Alert.alert(
      I18n.t('quit_title'),
      I18n.t('quit_content'),
      [
        {
          text: I18n.t('btn_continue'),
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: I18n.t('btn_quit'), onPress: () => exitApp() }
      ],
      { cancelable: false }
    );
    // return true to stop bubbling
    return true
  };


  // select sex
  RadioOnPress(value){
   this.props.setSEXonoff(value)
  }
  // 1
  STOnPress(value){
    this.props.setSTonoff(value)
  }
  
  // 2
  URIOnPress(value){
    this.props.setURIonoff(value)
  }

  NextOnPress(){
    if ( this.props.par_st === false && this.props.par_uri === false )
    {
      alert(I18n.t('message_error'))
    } else if ( this.props.par_sex === -1 ) {
      alert(I18n.t('message_error'))
    } else if ( this.props.par_st === true && this.props.par_uri === false ){
      // alert("selected st.")
      this.props.navigation.navigate("ScreenTwo")
    } else if ( this.props.par_st === false && this.props.par_uri === true ){
      // alert("selected uri")
      this.props.navigation.navigate("ScreenFou")
    } else {
      this.props.navigation.navigate("ScreenTwo")
    }
  }

  // handleChange() {   // test
  //   var origin = this.props.params
  //   var array = [origin[0], !origin[1], origin[2]]
  //   this.props.setValueToArray(array)
  // }

  render() {
    return (
      <Container style = {{backgroundColor: '#fff'}}>
        <Content padder>
          <View 
            style={commonStyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_initparam_cal')}</Text>
              <Switch
                style ={ commonStyles.switch }
                /* value={this.props.params[0]} */
                value={this.props.par_st}
                onSyncPress={this.STOnPress.bind(this)}   // this is st 
              />
          </View>
          <View
            style={commonStyles.paramview}>
              <Text style ={{left: 20}}>{I18n.t('screen_initparam_bio')}</Text>
              <Switch
                style = { commonStyles.switch }
                /* value={this.props.params[1]} */
                value={this.props.par_uri}
                onSyncPress={this.URIOnPress.bind(this)}   // this is uri
              />
          </View>
          <View
            style={ commonStyles.paramview }>
              <Text style={{left: 20}}>{I18n.t('screen_initparam_sex')}</Text>
              
          </View>
          <View
            style={{ marginTop: 20, flexDirection: 'row', height: 25 }}>
              <Text style={{left: 80}}>{I18n.t('screen_initparam_sex_man')}</Text>
              <View style={commonStyles.switch} >
                <RadioButton 
                  currentValue={this.props.par_sex} value={0} 
                  onPress={this.RadioOnPress.bind(this)}>   
                </RadioButton>
              </View>
          </View>
          <View
            style={{ marginTop: 10, flexDirection: 'row', height: 25 }}>
              <Text style={{left: 80}}>{I18n.t('screen_initparam_sex_woman')}</Text>
              <View style={commonStyles.switch} >
                <RadioButton 
                  currentValue={this.props.par_sex} value={1} 
                  onPress={this.RadioOnPress.bind(this)}>
                </RadioButton>
              </View>
          </View>
        </Content>
       <Button
            style={commonStyles.nextbtn}
            onPress={this.NextOnPress.bind(this)}>
            <Text style={{ color: '#fff', fontSize: 18 }}>{I18n.t('btn_next')}</Text>
        </Button>
      </Container>
    );
  }
}
ScreenOne.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Title style={{marginTop: 15}}>{I18n.t('screen_initparam_title')}</Title>
      <Right>
        <Button
            transparent
            onPress={() => navigation.navigate("HelpScreen")}>
            <Icon name="help" />
        </Button>
      </Right>
    </Header>
  )
});

const mapStateToProps = state => ({
  par_st: state.paramReducer.par_st,
  par_uri: state.paramReducer.par_uri,
  par_sex: state.paramReducer.par_sex,
  params: state.paramReducer.param  // test as array
})

const mapDispatchToProps = dispatch => ({

  setValueToArray:(arr) => { dispatch(setValueToArray(arr))},
  setSTonoff: (value) => { dispatch(setSTonoff(value))},
  setURIonoff: (value) => { dispatch(setURIonoff(value))},
  setSEXonoff: (value) => { dispatch(setSEXonoff(value))},
  setInitHelp: () => { dispatch(setInitHelp())}
})

export default connect(mapStateToProps, mapDispatchToProps)(ScreenOne)
