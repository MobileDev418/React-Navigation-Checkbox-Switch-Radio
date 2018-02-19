/**
 * 4th Screen
 */
import React, { Component } from 'react'
import { Container, Header, Left, Title, Card, CardItem, Content, Right, Icon, View, Button, Text } from 'native-base'
import Switch from 'react-native-switch-pro'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'

import commonstyles from './../Styles/CommonStyles.js'

import { 
  setMinOxcm,
  setMinOxcd,
  setMinHidrox,
  setMinBrus,
  setMinAcuri,
  setMinUra
} from './../../services/CalMinServices'
import { setHelp2, setInitHelp } from './../../services/HelpServices'

class ScreenThr extends Component {

  constructor (props){
    super(props)
  }

  componentDidMount(){
    this.props.setInitHelp()
    this.props.setHelp2(true)
  }

  handleOnPress(value){
    this.setState({value:value})
  } 

  OxcmOnPress(value){
    this.props.setMinOxcm(value)
  }

  OxcdOnPress(value){
    this.props.setMinOxcd(value)
  }

  HidroxOnPress(value){
    this.props.setMinHidrox(value)
  }

  UraOnPress(value){
    this.props.setMinUra(value)
  }

  BrusOnPress(value){
    this.props.setMinBrus(value)
  }

  AcuriOnPress(value){
    this.props.setMinAcuri(value)
  }


  NextOnPress(){
    if ( this.props.par_uri === false ) {
      this.props.navigation.navigate("ResultScreen")
    } else {
      this.props.navigation.navigate("ScreenFou")
    }
  }

  render() {
    return (
      <Container >
        <Content padder>
          <Card>
            <CardItem
              style = {{backgroundColor: '#5aff60'}}>
              <Text>{I18n.t('screen_calmin_help')}</Text>
            </CardItem>
          </Card>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_calmin_oxcm')}</Text>
              <Switch
                style={commonstyles.switch}
                value={this.props.calmin_oxcm}
                onSyncPress={this.OxcmOnPress.bind(this)}
              />
          </View>  
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_calmin_oxcd')}</Text>
              <Switch
                style={commonstyles.switch}
                value = {this.props.calmin_oxcd}
                onSyncPress={this.OxcdOnPress.bind(this)}
              />
          </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_calmin_hidrox')}</Text>
              <Switch
                style={commonstyles.switch}
                value = {this.props.calmin_hidrox}
                onSyncPress={this.HidroxOnPress.bind(this)}
              />
          </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_calmin_brus')}</Text>
              <Switch
                style={commonstyles.switch}
                value = { this.props.calmin_brus}
                onSyncPress={this.BrusOnPress.bind(this)}
              />
          </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_calmin_acuri')}</Text>
              <Switch
                style={commonstyles.switch}
                value = {this.props.calmin_acuri}
                onSyncPress={this.AcuriOnPress.bind(this)}
              />
          </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_calmin_ura')}</Text>
              <Switch
                style={commonstyles.switch}
                value = {this.props.calmin_ura}
                onSyncPress={this.UraOnPress.bind(this)}
              />
          </View>
        </Content>
        <Button
            style={commonstyles.prevbtn}
            onPress={() => this.props.navigation.goBack()}>
            <Text 
              style={{
                color: '#fff', 
                fontSize: 18
              }}>{I18n.t('btn_prev')}</Text>
          </Button>
        <Button
            style={commonstyles.nextbtn}
            onPress={this.NextOnPress.bind(this)}>
            <Text 
              style={{
                color: '#fff', 
                fontSize: 18
              }}>{I18n.t('btn_next')}</Text>
          </Button>
      </Container>
    );
  }
}
ScreenThr.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Title style={{marginTop: 15}}>{I18n.t('screen_calmin_title')}</Title>
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
  calmin_oxcm: state.calMin.calmin_oxcm,
  calmin_oxcd: state.calMin.calmin_oxcd,
  calmin_hidrox: state.calMin.calmin_hidrox,
  calmin_brus: state.calMin.calmin_brus,
  calmin_acuri: state.calMin.calmin_acuri,
  calmin_ura: state.calMin.calmin_ura
})

const mapDispatchToProps = dispatch => ({
  setMinOxcm: (value) => { dispatch(setMinOxcm(value)) },
  setMinOxcd: (value) => { dispatch(setMinOxcd(value)) },
  setMinAcuri: (value) => { dispatch(setMinAcuri(value)) },
  setMinBrus: (value) => { dispatch(setMinBrus(value)) },
  setMinHidrox: (value) => { dispatch(setMinHidrox(value)) },
  setMinUra: (value) => { dispatch(setMinUra(value)) },
  setHelp2: (value) => { dispatch(setHelp2(value)) },
  setInitHelp: (value) => { dispatch(setInitHelp(value)) }

})

export default connect(mapStateToProps, mapDispatchToProps)(ScreenThr)
