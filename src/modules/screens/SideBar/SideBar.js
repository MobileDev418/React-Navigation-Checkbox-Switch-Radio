/**
 * SideBar Screen
 */
import React from 'react'
import { AppRegistry, StatusBar, View, StyleSheet } from 'react-native'
import { Button, Text, Container, List, ListItem, Content, Icon } from 'native-base'
import Icons from '@assets/icons'
import I18n from 'react-native-i18n'
import Modal from 'react-native-modal'
import { connect } from 'react-redux'

import { setInitParamValue } from './../../services/ParamServices'
import { setInitMajValue } from './../../services/CalMajServices'
import { setInitMinValue } from './../../services/CalMinServices'
import { setInitBioValue } from './../../services/BioServices'
import { setInitExManValue } from './../../services/ExcrManServices'
import { setInitExWomanValue } from './../../services/ExcrWomanServices'
import { setInitHelp } from './../../services/HelpServices'


class SideBar extends React.Component {
  state = {
    isModalVisible: false
  }

  RestOnPress(){
    this.setState({isModalVisible: !this.state.isModalVisible})
  }

  DiscardOnPress(){
    this.setState({isModalVisible: false})
    this.props.setInitParamValue()
    this.props.setInitMajValue()
    this.props.setInitMinValue()
    this.props.setInitBioValue()
    this.props.setInitExManValue()
    this.props.setInitExWomanValue()
    this.props.setInitHelp()

    this.props.navigation.navigate("ScreenOne")
  }

  ContinueOnPress(){
    this.setState({isModalVisible: false})
    this.props.navigation.navigate("QaScreen")
  }

  setModalVisible(visible) {
    this.setState({isModalVisible: visible})
  }

  _showModal = () => this.setState({ isModalVisible: true })

  render() {
    return (
      <Container>
        <Content>
          <Button
            style={ styles.restartbtn }
            onPress={this.RestOnPress.bind(this)}>
            <Text 
              style={ styles.restarttext }>{I18n.t('btn_restart')}</Text>
        </Button>
        </Content>
        <View style={{ position: "absolute" }}>
          <Modal isVisible={this.state.isModalVisible}>
            <View style={styles.modalview}>
              <Text style={styles.dlgtitle}>{I18n.t('side_message_title')}</Text>
              <Text style={styles.message}>{I18n.t('side_message_content')}</Text>
              <View
                style={{ marginTop: 20, flexDirection: 'row'}}>
                <Button
                    style={styles.discardbtn}
                    onPress={this.DiscardOnPress.bind(this)}>
                    <Text style={ styles.btntext }>{I18n.t('btn_discard')}</Text>
                </Button>
                <Button
                    style={styles.continuebtn}
                    onPress={this.ContinueOnPress.bind(this)}>
                    <Text style={ styles.btntext }>{I18n.t('btn_continue')}</Text>
                </Button>
              </View>
            </View>
          </Modal>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create ({
  restartbtn : {
    width: 120,
    height: 40,
    marginLeft: 20,
    marginTop: 80,
    backgroundColor: '#ff5a60',
    justifyContent:'center',
    borderRadius:100,
    alignItems: 'center'
  },
  modalview : { 
    marginLeft: 15, 
    backgroundColor: "#fff", 
    width: 300, 
    height: 160, 
    borderRadius: 5 
  },
  dlgtitle : {
    height: 30, 
    borderRadius: 5, 
    marginTop: 5, 
    textAlign: 'center', 
    fontSize: 20
  },
  message : {
    height: 30, 
    borderRadius: 5, 
    marginTop: 20, 
    textAlign: 'center', 
    fontSize: 18
  },
  discardbtn : { 
    width: 130, 
    height: 40, 
    marginLeft: 10, 
    backgroundColor: '#ff5a60', 
    justifyContent:'center', 
    borderRadius:60, 
    alignItems: 'center' 
  },
  continuebtn : { 
    width: 130, 
    height: 40, 
    marginLeft: 20, 
    backgroundColor: '#ff5a60', 
    justifyContent:'center', 
    borderRadius:60, 
    alignItems: 'center' 
  }, 
  restarttext : {
    color: '#fff', 
    fontSize: 18
  },
  btntext: { 
    color: '#fff', 
    fontSize: 16 
  }
})

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  setInitParamValue: () => { dispatch(setInitParamValue()) },
  setInitBioValue: () => { dispatch(setInitBioValue()) },
  setInitMajValue: () => { dispatch(setInitMajValue()) },
  setInitMinValue: () => { dispatch(setInitMinValue()) },
  setInitExManValue: () => { dispatch(setInitExManValue()) },
  setInitExWomanValue: () => { dispatch(setInitExWomanValue()) },
  setInitHelp: () => { dispatch(setInitHelp())}

})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)