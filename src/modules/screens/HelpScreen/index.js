/**
 * @author Ma
 * @class HelpScreen 
 */

import React, { Component } from "react"
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, View } from "native-base"
import { TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
import Icons from '@assets/icons'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { setHelp1, setHelp2, setHelp3, setHelp4, setHelp5, setInitHelp } from './../../services/HelpServices'

class HelpScreen extends React.Component {
    constructor (props){
        super(props)
    }

    Help1Click(){
        this.props.setHelp1(!this.props.selHelp1)
    }
    Help2Click(){
        this.props.setHelp2(!this.props.selHelp2)
    }
    Help3Click(){
        this.props.setHelp3(!this.props.selHelp3)
    }
    Help4Click(){
        this.props.setHelp4(!this.props.selHelp4)
    }
    Help5Click(){
        this.props.setHelp5(!this.props.selHelp5)
    }

    static navigationOptions = ({ navigation }) => ({
        header: (
          <Header>
            <Left>
              <Button transparent onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>{I18n.t('screen_help_title')}</Title>
            </Body>
            <Right />
          </Header>
        )
      });
    render() {
    return (
        <Container>
            <Content padder>
            <View>
                <Text style={{left: 10, fontSize: 20, marginTop: 10}}>{I18n.t('screen_help_howtouse')}</Text>
            </View>
            <View                           // help 1
                style={styles.subtitile}>
                    <Text style={{left: 20, fontSize: 16, position: 'absolute'}}>{I18n.t('screen_help_subtitle1')}</Text>
                    <TouchableOpacity style={{right: 10, position: 'absolute'}} onPress={this.Help1Click.bind(this)}>
                        <Image
                            style={{width: 32, height: 24}}
                            source={this.props.selHelp1 === false ? Icons.downarrow: Icons.uparrow}
                        />
                    </TouchableOpacity>
            </View>
            <View                       
                style={ this.props.selHelp1 === false ? styles.recomHideView : styles.recomShowView}>
                    <Text style={ styles.recomtxt }>{I18n.t('screen_help_content1')}</Text>
            </View>
            <View                              // help 2
                style={styles.subtitile}>
                <Text style={{left: 20, fontSize: 16, position: 'absolute'}}>{I18n.t('screen_help_subtitle2')}</Text>
                <TouchableOpacity style={{right: 10, position: 'absolute'}} onPress={this.Help2Click.bind(this)}>
                        <Image
                            style={{width: 32, height: 24}}
                            source={this.props.selHelp2 === false ? Icons.downarrow: Icons.uparrow}
                        />
                    </TouchableOpacity>
            </View>
            <View 
                style={ this.props.selHelp2 === false ? styles.recomHideView : styles.recomShowView}>
                    <Text style={ styles.recomtxt }>{I18n.t('screen_help_content2')}</Text>
            </View>
            <View                               // help 3
                style={styles.subtitile}>
                <Text style={{left: 20, fontSize: 16, position: 'absolute'}}>{I18n.t('screen_help_subtitle3')}</Text>
                <TouchableOpacity style={{right: 10, position: 'absolute'}} onPress={this.Help3Click.bind(this)}>
                        <Image
                            style={{width: 32, height: 24}}
                            source={ this.props.selHelp3 === false ? Icons.downarrow: Icons.uparrow }
                        />
                    </TouchableOpacity>
            </View>
            <View 
                style={ this.props.selHelp3 === false ? styles.recomHideView : styles.recomShowView}>
                    <Text style={ styles.recomtxt }>{I18n.t('screen_help_content3')}</Text>
            </View>
            <View                               // help 4
                style={styles.subtitile}>
                <Text style={{left: 20, fontSize: 16, position: 'absolute'}}>{I18n.t('screen_help_subtitle4')}</Text>
                <TouchableOpacity style={{right: 10, position: 'absolute'}} onPress={this.Help4Click.bind(this)}>
                        <Image
                            style={{width: 32, height: 24}}
                            source={ this.props.selHelp4 === false ? Icons.downarrow: Icons.uparrow }
                        />
                    </TouchableOpacity>
            </View>
            <View 
                style={ this.props.selHelp4 === false ? styles.recomHideView : styles.recomShowView}>
                    <Text style={ styles.recomtxt }>{I18n.t('screen_help_content4')}</Text>
            </View>
            <View                               // help 5
                style={styles.subtitile}>
                <Text style={{left: 20, fontSize: 16, position: 'absolute'}}>{I18n.t('screen_help_subtitle5')}</Text>
                <TouchableOpacity style={{right: 10, position: 'absolute'}} onPress={this.Help5Click.bind(this)}>
                        <Image
                            style={{width: 32, height: 24}}
                            source={ this.props.selHelp5 === false ? Icons.downarrow: Icons.uparrow }
                        />
                    </TouchableOpacity>
            </View>
            <View 
                style={ this.props.selHelp5 === false ? styles.recomHideView : styles.recomShowView}>
                    <Text style={ styles.recomtxt }>{I18n.t('screen_help_content5')}</Text>
            </View>
            <View>
                <Text style={{left: 10, fontSize: 18, marginTop: 20}}>{I18n.t('screen_help_aboutus')}</Text>
            </View>
            <View 
                style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>{I18n.t('screen_help_about')}</Text>
            </View>
            <View 
                style={{marginTop: 30, justifyContent: 'center', alignItems: 'center', marginBottom: 60}}>
                    <Text>{I18n.t('screen_help_copyright')}</Text>
            </View>
            </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
    subtitile: {
        marginTop: 20, 
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    recomHideView: {
        marginTop: 20, 
        flexDirection: 'row', 
        height: 0
    },
    recomShowView: {
        marginTop: 20, 
        flexDirection: 'row', 
    },
    recomtxt: {
        marginLeft: 40, 
        fontSize: 14, 
        marginRight: 10,
        marginTop: 20
    },
    prebutton: {
        width: 120,
        height: 40, 
        position: 'absolute',
        bottom: 10, 
        left:10,
        backgroundColor: '#ff5a60',
        justifyContent:'center',
        borderRadius:100,
        alignItems: 'center'
    },
    nextbutton: {
        width: 120,
        height: 40, 
        position: 'absolute',
        bottom: 10, 
        right:10,
        backgroundColor: '#ff5a60',
        borderRadius:100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mailicon: {
        marginRight:0, 
        paddingRight:5
    }
})

const mapStateToProps = state => ({
    selHelp1: state.Help.selHelp1,
    selHelp2: state.Help.selHelp2,
    selHelp3: state.Help.selHelp3,
    selHelp4: state.Help.selHelp4,
    selHelp5: state.Help.selHelp5,
  })
  
  const mapDispatchToProps = dispatch => ({
    setHelp1: (value) => { dispatch(setHelp1(value)) },
    setHelp2: (value) => { dispatch(setHelp2(value)) },
    setHelp3: (value) => { dispatch(setHelp3(value)) },
    setHelp4: (value) => { dispatch(setHelp4(value)) },
    setHelp5: (value) => { dispatch(setHelp5(value)) },
    setInitHelp: () => { dispatch(setInitHelp()) },
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(HelpScreen)