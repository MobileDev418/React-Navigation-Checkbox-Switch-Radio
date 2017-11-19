/**
 * 7th Screen
 */
import React, { Component } from "react"
import { Container, Header, Left, Title, Card, CardItem, Content, Right, Icon, View, Button, Text } from "native-base"
import Switch from 'react-native-switch-pro'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'

import commonstyles from './../Styles/CommonStyles.js'

import { 
  setExWomanVol,
  setExWomanCa,
  setExWomanOx,
  setExWomanP,
  setExWomanCit,
  setExWomanAcuri
} from './../../services/ExcrWomanServices'
import { setInitHelp, setHelp5 } from './../../services/HelpServices'

class ScreenSix extends Component {

  constructor (props){
    super(props)
  }

  componentDidMount(){
    this.props.setInitHelp()
    this.props.setHelp5(true)
  }

  VolOnPress(value){
    this.props.setExWomanVol(value)
  } 

  CaOnPress(value){
    this.props.setExWomanCa(value)
  }

  OxOnPress(value){
    this.props.setExWomanOx(value)
  }

  POnPress(value){
    this.props.setExWomanP(value)
  }

  AcuriOnPress(value){
    this.props.setExWomanAcuri(value)
  }

  CitOnPress(value){
    this.props.setExWomanCit(value)
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
              <Text>{I18n.t('screen_excr_woman_help')}</Text>
            </CardItem>
          </Card>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_excr_woman_vol')}</Text>
              <Switch
                style={commonstyles.switch}
                value = {this.props.excrwoman_vol}
                onSyncPress={this.VolOnPress.bind(this)}
              />
          </View>  
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_excr_woman_ca')}</Text>
              <Switch
                style={commonstyles.switch}
                value = {this.props.excrwoman_ca}
                onSyncPress={this.CaOnPress.bind(this)}
              />
          </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_excr_woman_ox')}</Text>
              <Switch
                style={commonstyles.switch}
                value = {this.props.excrwoman_ox}
                onSyncPress={this.OxOnPress.bind(this)}
              />
          </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_excr_woman_p')}</Text>
              <Switch
                style={commonstyles.switch}
                value = {this.props.excrwoman_p}
                onSyncPress={this.POnPress.bind(this)}
              />
          </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_excr_woman_acuri')}</Text>
              <Switch
                style={commonstyles.switch}
                value={this.props.excrwoman_acuri}
                onSyncPress={this.AcuriOnPress.bind(this)}
              />
          </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_excr_woman_cit')}</Text>
              <Switch
                style={commonstyles.switch}
                value={this.props.excrwoman_cit}
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
ScreenSix.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Title style={{marginTop: 15}}>{I18n.t('screen_excr_woman_title')}</Title>
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
  excrwoman_vol: state.ExcrWoman.excrwoman_vol,
  excrwoman_ca: state.ExcrWoman.excrwoman_ca,
  excrwoman_ox: state.ExcrWoman.excrwoman_ox,
  excrwoman_p: state.ExcrWoman.excrwoman_p,
  excrwoman_acuri: state.ExcrWoman.excrwoman_acuri,
  excrwoman_cit: state.ExcrWoman.excrwoman_cit
})

const mapDispatchToProps = dispatch => ({
  setExWomanVol: (value) => { dispatch(setExWomanVol(value))},
  setExWomanCa: (value) => { dispatch(setExWomanCa(value))},
  setExWomanOx: (value) => { dispatch(setExWomanOx(value))},
  setExWomanP: (value) => { dispatch(setExWomanP(value)) },
  setExWomanAcuri: (value) => { dispatch(setExWomanAcuri(value)) },
  setExWomanCit: (value) => { dispatch(setExWomanCit(value)) },
  setHelp5: (value) => { dispatch(setHelp5(value)) },
  setInitHelp: (value) => { dispatch(setInitHelp(value)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ScreenSix)
