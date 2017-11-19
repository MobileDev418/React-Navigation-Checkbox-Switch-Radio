/**
 * 6th Screen
 */
import React, { Component } from "react"
import { Container, Header, Left, Title, Card, CardItem, Content, Right, Icon, View, Button, Text } from "native-base"
import Switch from 'react-native-switch-pro'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'

import commonstyles from './../Styles/CommonStyles.js'

import { 
  setExManVol,
  setExManCa,
  setExManOx,
  setExManP,
  setExManCit,
  setExManAcuri
} from './../../services/ExcrManServices'
import { setInitHelp, setHelp4 } from './../../services/HelpServices'

class ScreenFiv extends Component {

  constructor (props){
    super(props)
  }
  componentDidMount() {
    this.props.setInitHelp()
    this.props.setHelp4(true)
  }

  VolOnPress(value){
    this.props.setExManVol(value)
  } 

  CaOnPress(value){
    this.props.setExManCa(value)
  }

  OxOnPress(value){
    this.props.setExManOx(value)
  }

  POnPress(value){
    this.props.setExManP(value)
  }

  AcuriOnPress(value){
    this.props.setExManAcuri(value)
  }

  CitOnPress(value){
    this.props.setExManCit(value)
  }

  NextOnPress(){
    this.props.navigation.navigate("ResultScreen")
  }
  
  render() {
    return (
      <Container >
        <Content padder>
          <Card>
            <CardItem
              style = {{backgroundColor: '#5aff60'}}>
              <Text>{I18n.t('screen_excr_man_help')}</Text>
            </CardItem>
          </Card>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_excr_man_vol')}</Text>
              <Switch
                style={commonstyles.switch}
                value = {this.props.excrman_vol}
                onSyncPress={this.VolOnPress.bind(this)}
              />
          </View>  
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_excr_man_ca')}</Text>
              <Switch
                style={commonstyles.switch}
                value = {this.props.excrman_ca}
                onSyncPress={this.CaOnPress.bind(this)}
              />
          </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_excr_man_ox')}</Text>
              <Switch
                style={commonstyles.switch}
                value = {this.props.excrman_ox}
                onSyncPress={this.OxOnPress.bind(this)}
              />
          </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_excr_man_p')}</Text>
              <Switch
                style={commonstyles.switch}
                value = {this.props.excrman_p}
                onSyncPress={this.POnPress.bind(this)}
              />
          </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_excr_man_acuri')}</Text>
              <Switch
                style={commonstyles.switch}
                value={this.props.excrman_acuri}
                onSyncPress={this.AcuriOnPress.bind(this)}
              />
          </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_excr_man_cit')}</Text>
              <Switch
                style={commonstyles.switch}
                value={this.props.excrman_cit}
                onSyncPress={this.CitOnPress.bind(this)}
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
ScreenFiv.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Title style={{marginTop: 15}}>{I18n.t('screen_excr_man_title')}</Title>
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
  excrman_vol: state.ExcrMan.excrman_vol,
  excrman_ca: state.ExcrMan.excrman_ca,
  excrman_ox: state.ExcrMan.excrman_ox,
  excrman_p: state.ExcrMan.excrman_p,
  excrman_acuri: state.ExcrMan.excrman_acuri,
  excrman_cit: state.ExcrMan.excrman_cit
})

const mapDispatchToProps = dispatch => ({
  setExManVol: (value) => { dispatch(setExManVol(value))},
  setExManCa: (value) => { dispatch(setExManCa(value))},
  setExManOx: (value) => { dispatch(setExManOx(value))},
  setExManP: (value) => { dispatch(setExManP(value)) },
  setExManAcuri: (value) => { dispatch(setExManAcuri(value)) },
  setExManCit: (value) => { dispatch(setExManCit(value)) },
  setHelp4: (value) => { dispatch(setHelp4(value)) },
  setInitHelp: (value) => { dispatch(setInitHelp(value)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ScreenFiv)
