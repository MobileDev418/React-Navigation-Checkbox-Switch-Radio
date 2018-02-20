/**
 *  StartupScreen 
 */

import React from "react";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, View } from "native-base"
import { Image, TouchableOpacity, StyleSheet, BackHandler, Alert } from 'react-native'
import CheckBox from 'react-native-check-box'
import { exitApp } from 'react-native-back-android'

import I18n from 'react-native-i18n';   //Auto Translator NPM

// Enable fallbacks if you want `en-US`
// and `en-GB` to fallback to `en`
I18n.fallbacks = true;

// Available languages
I18n.translations = {
    'af': require('./../../translations/af'),
    'ar': require('./../../translations/ar'),
    'az': require('./../../translations/az'),
    'be': require('./../../translations/be'),
    'bs': require('./../../translations/bs'),
    'cs': require('./../../translations/cs'),
    'da': require('./../../translations/da'),
    'de': require('./../../translations/de'),
    'el': require('./../../translations/el'),
    'en': require('./../../translations/en'),
    'et': require('./../../translations/et'),
    'hu': require('./../../translations/hu'),
    'fr': require('./../../translations/fr'),
    'es': require('./../../translations/es'),
    'id': require('./../../translations/id'),
    'ja': require('./../../translations/ja'),
    'it': require('./../../translations/it'),
    'kk': require('./../../translations/kk'),
    'ko': require('./../../translations/ko'),
    'ro': require('./../../translations/ro'),
    'ru': require('./../../translations/ru'),
    'sq': require('./../../translations/sq'),
    'sv': require('./../../translations/sv'),
    'tr': require('./../../translations/tr'),
    'uk': require('./../../translations/uk'),
    'zh': require('./../../translations/zh'),
};

export default class StartupScreen extends React.Component {

    constructor (props){
        super(props)

        this.state = {
            advise1: false,
            advise2: false,
            advise3: false
        }
    }

    onClickCheck1() {
        this.setState({advise1: !this.state.advise1})
    }

    onClickCheck2() {
        this.setState({advise2: !this.state.advise2})
    }

    onClickCheck3() {
        this.setState({advise3: !this.state.advise3})
    }

    componentWillMount() {
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

    StartBtnPress() {
        if ( this.state.advise1 === false || this.state.advise2 === false || this.state.advise3 === false ) {
            alert( I18n.t('message_agree'))
        } else {
            this.props.navigation.navigate("QaScreen")
        }
    }

    render() {
    return (
        <Container>
            <Header>
            <Left>
            </Left>
            <Body>
                <Title>{I18n.t('screen_advise_title')}</Title>
            </Body>
            <Right>
            </Right>
            </Header>
            <Content>
                <View>
                    <Text 
                        style={{fontSize: 20, marginTop: 20, marginLeft: 10}}>{I18n.t('screen_advise_subtitle')}:</Text>
                </View>
                <View style={styles.view}>
                    <CheckBox
                        style={styles.checkbox}
                        isChecked={this.state.advise1}
                        onClick={this.onClickCheck1.bind(this)}
                    />
                    <Text
                        style={styles.textview}>{I18n.t('screen_advise_first')}</Text>
                </View>
            
                <View style={styles.view}>
                    <CheckBox
                        style={styles.checkbox}
                        isChecked={this.state.advise2}
                        onClick={this.onClickCheck2.bind(this)}
                    />
                    <Text 
                        style={styles.textview}>{I18n.t('screen_advise_second')}</Text>
                </View>
                <View 
                style={{flexDirection: 'row', marginTop: 10, marginBottom: 50}}>
                    <CheckBox
                        style={styles.checkbox}
                        isChecked={this.state.advise3}
                        onClick={this.onClickCheck3.bind(this)}
                    />
                    <Text 
                        style={styles.textview}>{I18n.t('screen_advise_third')}</Text>
                </View>
            </Content>
            <View
                style={styles.button}>
                <TouchableOpacity
                    onPress={ this.StartBtnPress.bind(this)}>
                    <Text style={styles.start}>{I18n.t('btn_start')}</Text>
                </TouchableOpacity>
            </View>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
    subject: {
        fontSize: 20, 
        marginTop: 20
    },
    view: {
        flexDirection: 'row',
        marginTop: 10
    },
    button: {
        width: 120,
        height: 40, 
        position: 'absolute',
        bottom: 10, 
        right:10,
        backgroundColor: '#ff5a60',
        justifyContent:'center',
        borderRadius:100,
        alignItems: 'center'
    },
    start: {
        color: '#fff', 
        fontSize: 18
    },
    checkbox: {
        padding: 10, 
        justifyContent: 'center'
    },
    textview: {
        fontSize: 20, 
        padding : 10,
        marginRight: 40
    }
});
