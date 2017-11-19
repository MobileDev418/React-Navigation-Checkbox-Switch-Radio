/**
 * 5th Screen
 */
import React, { Component } from "react"
import { Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, View, Button, Text } from "native-base"
import Switch from 'react-native-switch-pro'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n';

import commonstyles from './../Styles/CommonStyles.js'

import { 
  setBioCa,
  setBioOx,
  setBioP,
  setBioCit,
  setBioAcuri,
  setBioMg,
  setBioPhGt,
  setBioPhLt
} from './../../services/BioServices'
import { setHelp3, setInitHelp } from './../../services/HelpServices'


class ScreenFou extends Component {

  constructor (props){
    super(props)
  }
  componentDidMount() {
    this.props.setInitHelp()
    this.props.setHelp3(true)
  }

  handleOnPress(value){
    this.setState({value:value})
  } 

  BioCaOnPress(value) {
    this.props.setBioCa(value)
  }

  BioOxOnPress(value){
    this.props.setBioOx(value)
  }

  BioPOnPress(value){
    this.props.setBioP(value)
  }

  BioCitOnPress(value){
    this.props.setBioCit(value)
  }

  BioAcuriOnPress(value){
    this.props.setBioAcuri(value)
  }

  BioMgOnPress(value){
    this.props.setBioMg(value)
  }

  BioPhGtOnPress(value){
    this.props.setBioPhGt(value)
  }

  BioPhLtOnPress(value){
    this.props.setBioPhLt(value)
  }

  NextOnPress(){
    if ( this.props.par_sex === 0 )
    {
      this.props.navigation.navigate("ScreenFiv")
    } else {
      this.props.navigation.navigate("ScreenSix")
    }
  }

  render() {
    return (
      <Container >
        <Content padder>
          <Card>
            <CardItem
              style = {{backgroundColor: '#5aff60'}}>
              <Text>{I18n.t('screen_bio_help')}</Text>
            </CardItem>
          </Card>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_bio_ca')}</Text>
              <Switch
                style={commonstyles.switch}
                value = { this.props.bio_ca}
                onSyncPress={ this.BioCaOnPress.bind(this) }
              />
          </View>  
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_bio_ox')}</Text>
              <Switch
                style={commonstyles.switch}
                value = { this.props.bio_ox}
                onSyncPress={ this.BioOxOnPress.bind(this) }
              />
          </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_bio_p')}</Text>
              <Switch
                style={commonstyles.switch}
                value = { this.props.bio_p}
                onSyncPress={ this.BioPOnPress.bind(this) }
              />
          </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_bio_acuri')}</Text>
              <Switch
                style={commonstyles.switch}
                value = { this.props.bio_acuri}
                onSyncPress={ this.BioAcuriOnPress.bind(this) }
              />
          </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_bio_cit')}</Text>
              <Switch
                style={commonstyles.switch}
                value = { this.props.bio_cit}
                onSyncPress={ this.BioCitOnPress.bind(this) }
              />
          </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_bio_mg')}</Text>
              <Switch
                style={commonstyles.switch}
                value = { this.props.bio_mg}
                onSyncPress={ this.BioMgOnPress.bind(this) }
              />
          </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_bio_ph_gt62')}</Text>
              <Switch
                style={commonstyles.switch}
                value = { this.props.bio_ph_gt}
                onSyncPress={ this.BioPhGtOnPress.bind(this) }
              />
          </View>
          <View 
            style={commonstyles.paramview}>
              <Text style={{left: 20}}>{I18n.t('screen_bio_ph_lt55')}</Text>
              <Switch
                style={commonstyles.switch}
                value = { this.props.bio_ph_lt}
                onSyncPress={ this.BioPhLtOnPress.bind(this) }
              />
          </View>
        </Content>
        <Button
            style={ commonstyles.prevbtn }
            onPress={() => this.props.navigation.goBack()}>
            <Text 
              style={{
                color: '#fff', 
                fontSize: 18
              }}>{I18n.t('btn_prev')}</Text>
          </Button>
        <Button
            style={ commonstyles.nextbtn }
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
ScreenFou.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Title style={{marginTop: 15}}>{I18n.t('screen_bio_title')}</Title>
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
  par_sex: state.paramReducer.par_sex,
  bio_ca: state.Bio.bio_ca,
  bio_ox: state.Bio.bio_ox,
  bio_p: state.Bio.bio_p,
  bio_acuri: state.Bio.bio_acuri,
  bio_cit: state.Bio.bio_cit,
  bio_mg: state.Bio.bio_mg,
  bio_ph_gt: state.Bio.bio_ph_gt,
  bio_ph_lt: state.Bio.bio_ph_lt
})

const mapDispatchToProps = dispatch => ({
  setBioCa: (value) => { dispatch(setBioCa(value)) },
  setBioOx: (value) => { dispatch(setBioOx(value)) },
  setBioP: (value) => { dispatch(setBioP(value)) },
  setBioMg: (value) => { dispatch(setBioMg(value)) },
  setBioCit: (value) => { dispatch(setBioCit(value)) },
  setBioAcuri: (value) => { dispatch(setBioAcuri(value)) },
  setBioPhGt: (value) => { dispatch(setBioPhGt(value)) },
  setBioPhLt: (value) => { dispatch(setBioPhLt(value)) },
  setHelp3: (value) => { dispatch(setHelp3(value)) },
  setInitHelp: (value) => { dispatch(setInitHelp(value)) }

})

export default connect(mapStateToProps, mapDispatchToProps)(ScreenFou)
