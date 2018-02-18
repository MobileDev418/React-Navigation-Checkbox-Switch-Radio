/**
 * @ 3rd Screen
 */
import React, { Component } from "react"
import { Alert } from "react-native"
import { Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, View, Button, Text } from "native-base"
import Switch from 'react-native-switch-pro'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n';

import commonstyles from './../Styles/CommonStyles.js'

import { 
  setMajOxcmPap,
  setMajOxcmNoPap,
  setMajOxcd,
  setMajHidrox,
  setMajEstru,
  setMajAcuri,
  setMajUraAmo,
  setMajUraPota,
  setMajUraSodi,
  setMajCist
} from './../../services/CalMajServices'
import { setHelp1, setInitHelp } from './../../services/HelpServices'

class ScreenTwo extends Component {

  constructor (props){
    super(props)
  }

  componentDidMount(){
    this.props.setInitHelp()
    this.props.setHelp1(true)
  }

  handleOnPress(value){
    this.setState({value:value})
  } 

  OxcmPapOnPress(value){
    this.props.setMajOxcmPap(value)
  }

  OxcmNoPapOnPress(value){
    this.props.setMajOxcmNoPap(value)
  }

  OxcdOnPress(value){
    this.props.setMajOxcd(value)
  }

  HidroxOnPress(value){
    this.props.setMajHidrox(value)
  }

  UraSodiOnPress(value){
    this.props.setMajUraSodi(value)
  }

  CistOnPress(value){
    this.props.setMajCist(value)
  }

  NextOnPress(){
    if ( this.props.calmaj_oxcm_pap === false && this.props.calmaj_oxcm_nopap === false && this.props.calmaj_acuri === false && this.props.calmaj_hidrox === false && this.props.calmaj_estru === false && this.props.calmaj_oxcd === false && this.props.calmaj_cist === false && this.props.calmaj_ura_amo === false && this.props.calmaj_ura_pota === false && this.props.calmaj_ura_sodi === false)
    {
      alert(I18n.t('message_select'))
    } else {
      this.props.navigation.navigate("ScreenThr")
    }
  }

  render() {
    return (
      <Container >
        <Content padder>
          <Card>
            <CardItem
              style = {{backgroundColor: '#5aff60'}}>
              <Text>{I18n.t('screen_calmaj_help')}</Text>
            </CardItem>
          </Card>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_calmaj_oxcm')}</Text>
              
          </View>
          <View 
            style={commonstyles.paramview}>
              {<Text style={{left: 80}}>{I18n.t('screen_calmaj_oxcm_pap')}</Text>}
              <Switch
                style={commonstyles.switch}
                value={this.props.calmaj_oxcm_pap}
                onSyncPress={this.OxcmPapOnPress.bind(this)}
              />
              </View>
          <View 
            style={commonstyles.paramview}>
              {<Text style={{left: 80}}>{I18n.t('screen_calmaj_oxcm_nopap')}</Text>}
              <Switch
                style={commonstyles.switch}
                value={this.props.calmaj_oxcm_nopap}
                onSyncPress={this.OxcmNoPapOnPress.bind(this)}
              />
              </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_calmaj_oxcd')}</Text>
              <Switch
                style={commonstyles.switch}
                value={this.props.calmaj_oxcd}
                onSyncPress={this.OxcdOnPress.bind(this)}
              />
          </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_calmaj_hidrox')}</Text>
              <Switch
                style={commonstyles.switch}
                value={this.props.calmaj_hidrox}
                onSyncPress={this.HidroxOnPress.bind(this)}
              />
          </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_calmaj_estru')}</Text>
              <Switch
                style={commonstyles.switch}
                value={this.props.calmaj_estru}
                onSyncPress={this.EstruOnPress.bind(this)}
              />
          </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_calmaj_acuri')}</Text>
              <Switch
                style={commonstyles.switch}
                value={this.props.calmaj_acuri}
                onSyncPress={this.AcuriOnPress.bind(this)}
              />
          </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_calmaj_ura')}</Text>
              
          </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 80}}>{I18n.t('screen_calmaj_ura_amo')}</Text>
              <Switch
                style={commonstyles.switch}
                value={this.props.calmaj_ura_amo}
                onSyncPress={this.UraAmoOnPress.bind(this)}
              />

          </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 80}}>{I18n.t('screen_calmaj_ura_pota')}</Text>
              <Switch
                style={commonstyles.switch}
                value={this.props.calmaj_ura_pota}
                onSyncPress={this.UraPotaOnPress.bind(this)}
              />

          </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 80}}>{I18n.t('screen_calmaj_ura_sodi')}</Text>
              <Switch
                style={commonstyles.switch}
                value={this.props.calmaj_ura_sodi}
                onSyncPress={this.UraSodiOnPress.bind(this)}
              />

          </View>
          <View 
            style={{ marginTop: 20, marginBottom: 100, flexDirection: 'row' }}>
              <Text style={{left: 20}}>{I18n.t('screen_calmaj_cist')}</Text>
              <Switch
                style={commonstyles.switch}
                value={this.props.calmaj_cist}
                onSyncPress={this.CistOnPress.bind(this)}
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
ScreenTwo.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Title style={{marginTop: 15}}>{I18n.t('screen_calmaj_title')}</Title>
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
  calmaj_oxcm_pap: state.calMaj.calmaj_oxcm_pap,
  calmaj_oxcm_nopap: state.calMaj.calmaj_oxcm_nopap,
  calmaj_oxcd: state.calMaj.calmaj_oxcd,
  calmaj_hidrox: state.calMaj.calmaj_hidrox,
  calmaj_estru: state.calMaj.calmaj_estru,
  calmaj_acuri: state.calMaj.calmaj_acuri,
  calmaj_ura_amo: state.calMaj.calmaj_ura_amo,
  calmaj_ura_pota: state.calMaj.calmaj_ura_pota,
  calmaj_ura_sodi: state.calMaj.calmaj_ura_sodi,
  calmaj_cist: state.calMaj.calmaj_cist
})

const mapDispatchToProps = dispatch => ({
  setMajOxcmPap: (value) => { dispatch(setMajOxcmPap(value)) },
  setMajOxcmNoPap: (value) => { dispatch(setMajOxcmNoPap(value)) },
  setMajOxcd: (value) => { dispatch(setMajOxcd(value)) },
  setMajHidrox: (value) => { dispatch(setMajHidrox(value)) },
  setMajEstru: (value) => { dispatch(setMajEstru(value)) },
  setMajAcuri: (value) => { dispatch(setMajAcuri(value)) },
  setMajUraAmo: (value) => { dispatch(setMajUraAmo(value)) },
  setMajUraPota: (value) => { dispatch(setMajUraPota(value)) },
  setMajUraSodi: (value) => { dispatch(setMajUraSodi(value)) },
  setMajCist: (value) => { dispatch(setMajCist(value)) },
  setHelp1: (value) => { dispatch(setHelp1(value)) },
  setInitHelp: (value) => { dispatch(setInitHelp(value)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ScreenTwo)
