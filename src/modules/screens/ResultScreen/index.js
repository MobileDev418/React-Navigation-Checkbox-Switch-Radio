
/**
 * Results Screen
 */
import React, { Component } from 'react'
import { Alert, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions } from 'react-native'
import { Container, Header, Left, Title, Content, Right, Icon, View, Button, Text } from 'native-base'
import { ProgressDialog } from 'react-native-simple-dialogs'
import { connect } from 'react-redux'
import Mailer from 'react-native-mail'
import I18n from 'react-native-i18n'
import Icons from '@assets/icons'
import Modal from 'react-native-modal'

import { setInitParamValue } from './../../services/ParamServices'
import { setInitMajValue } from './../../services/CalMajServices'
import { setInitMinValue } from './../../services/CalMinServices'
import { setInitBioValue } from './../../services/BioServices'
import { setInitExManValue } from './../../services/ExcrManServices'
import { setInitExWomanValue } from './../../services/ExcrWomanServices'
import { setInitHelp } from './../../services/HelpServices'
import commonStyles from './../Styles/CommonStyles'
import Algorithms from './algorithm'

class ResultScreen extends Component {

    constructor (props){
        super(props)

        this.state = {
            results: [],
            showProgress: false,
            isModalVisible: false
        }
    }
    
    componentDidMount() {
        this.props.setInitHelp()
        this.openProgress()
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

    NewOnPress() {
        this.setState({isModalVisible: !this.state.isModalVisible})
    }

    setModalVisible(visible) {
        this.setState({isModalVisible: visible})
      }
    
      _showModal = () => this.setState({ isModalVisible: true })

    openProgress(){
        this.setState( { showProgress: true} )

        setTimeout(
          () => this.setState( { showProgress: false }),
          4000
        )
        Algorithms.compute(this.props) // You can call like this
    }

    calcResults(){
        // alert("Calculate Algorithms!")
        var array = [];
        for(let i = 0; i < 3; i ++){
            array.push({title: "Factor etiologico", detail: "This is the recomendation for result", selShow: false})
        }
        this.setState({ results: array });
    }

    showDetail = (i) => {
        const newResult = this.state.results.slice();
        newResult[i].selShow = !newResult[i].selShow
        this.setState({ results: newResult})
    }

    handleEmail = () => {
        Mailer.mail({
            subject: 'kidney diagnosis',
            recipients: [],
            body: '<b>A Bold Body</b>',
            isHTML: true,
            attachment: {
                path: '',
                type: '',
                name: '',
            }
        }, (error, event) =>{
            Alert.alert(
                error,
                event,
                [
                    {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
                    {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
                ],
                { cancelable: true }
            )
        });
    }

    render() {
        return (
            <Container>
                <Content padder>
                <View                           // sub title
                    style={styles.subtitile}>
                    <Text style={{left: 10}}>{I18n.t('screen_results_subtitle')}</Text>
                </View>
                <ScrollView>
                {
                    this.state.results.map((data, i )=>{
                        return(
                            <View
                                key = {i}>
                                <View                           // fac 1
                                    style={styles.subtitile}>
                                        <Text style={{left: 20, fontSize: 16, position: 'absolute'}}>{data.title}</Text>
                                        <TouchableOpacity style={{right: 20, position: 'absolute'}} onPress={this.showDetail.bind(this, i)}>
                                            <Image
                                                style={{width: 32, height: 24}}
                                                source={data.selShow === false ? Icons.downarrow: Icons.uparrow}
                                            />
                                        </TouchableOpacity>
                                </View>
                                <View                       
                                    style={ data.selShow === false ? styles.recomHideView : styles.recomShowView}>
                                        <Text style={styles.recomtxt}>{data.detail}</Text>
                                </View>
                                <View style={styles.separater} />
                            </View>
                        )
                    }
                )}</ScrollView>
                <View style={{marginBottom: 80}}/>
                </Content>
                <Button
                    style={commonStyles.prevbtn}
                    onPress={this.NewOnPress.bind(this)}>
                    <Text 
                    style={{
                        color: '#fff', 
                        fontSize: 18
                    }}>{I18n.t('btn_new')}</Text>
                </Button>
                <Button
                    style={commonStyles.nextbtn}
                    onPress={this.handleEmail}>
                    <Icon style={styles.mailicon}name="mail" />
                    <Text 
                    style={{
                        left: 0,
                        color: '#fff',
                        paddingLeft: 0,
                        fontSize: 18
                    }}>{I18n.t('btn_send')}</Text>
                </Button>
                <View style={{ position: "absolute" }}>
                    <ProgressDialog
                    visible={this.state.showProgress}
                    title={I18n.t('progress_title')}
                    message={I18n.t('progress_content')}
                    animationType="slide"
                    activityIndicatorSize="large"
                    activityIndicatorColor="blue"
                    />
                </View>
                <View style={{ position: "absolute" }}>
                    <Modal isVisible={this.state.isModalVisible}>
                        <View style={styles.modalview}>
                        <Text style={styles.dlgtitle}>{I18n.t('btn_new')}</Text>
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
ResultScreen.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
        <Left>
            <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
            <Icon name="menu" />
            </Button>
        </Left>
        <Title style={{marginTop: 15}}>{I18n.t('screen_results_title')}</Title>
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

const styles = StyleSheet.create({
    subtitile: {
        marginTop: 20, 
        flexDirection: 'row'
    },
    separater: {
        backgroundColor: '#000',
        marginTop: 10,
        height: 1,
        opacity: 0.4
    },
    recomHideView: {
        marginTop: 20, 
        flexDirection: 'row', 
        height: 0
    },
    recomShowView: {
        marginTop: 40, 
        flexDirection: 'row', 
    },
    recomtxt: {
        marginLeft: 40, 
        fontSize: 14, 
        marginRight: 10
    },
    scrollcontainer: {
        width: Dimensions.get('window').width,
    },
    mailicon: {
        marginRight:0, 
        paddingRight:5
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
      btntext: { 
        color: '#fff', 
        fontSize: 16 
      }
})

const mapStateToProps = state => ({
    //2nd screen param
    par_st:             state.paramReducer.par_st,
    par_uri:            state.paramReducer.par_uri,
    par_sex:            state.paramReducer.par_sex,
    //3rd screen data
    calmaj_oxcm_pap:    state.calMaj.calmaj_oxcm_pap,
    calmaj_oxcm_nopap:  state.calMaj.calmaj_oxcm_nopap,
    calmaj_oxcd:        state.calMaj.calmaj_oxcd,
    calmaj_hidrox:      state.calMaj.calmaj_hidrox,
    calmaj_estru:       state.calMaj.calmaj_estru,
    calmaj_acuri:       state.calMaj.calmaj_acuri,
    calmaj_ura_amo:     state.calMaj.calmaj_ura_amo,
    calmaj_ura_pota:    state.calMaj.calmaj_ura_pota,
    calmaj_ura_sodi:    state.calMaj.calmaj_ura_sodi,
    calmaj_cist:        state.calMaj.calmaj_cist,
    //4th screen data
    calmin_oxcm:        state.calMin.calmin_oxcm,
    calmin_oxcd:        state.calMin.calmin_oxcd,
    calmin_hidrox:      state.calMin.calmin_hidrox,
    calmin_brus:        state.calMin.calmin_brus,
    calmin_acuri:       state.calMin.calmin_acuri,
    calmin_ura:         state.calMin.calmin_ura,
    //5th screen data
    bio_ca:             state.Bio.bio_ca,
    bio_ox:             state.Bio.bio_ox,
    bio_p:              state.Bio.bio_p,
    bio_acuri:          state.Bio.bio_acuri,
    bio_cit:            state.Bio.bio_cit,
    bio_mg:             state.Bio.bio_mg,
    bio_ph_gt:          state.Bio.bio_ph_gt,
    bio_ph_lt:          state.Bio.bio_ph_lt,
    //6th screen data
    excrman_vol:        state.ExcrMan.excrman_vol,
    excrman_ca:         state.ExcrMan.excrman_ca,
    excrman_ox:         state.ExcrMan.excrman_ox,
    excrman_p:          state.ExcrMan.excrman_p,
    excrman_acuri:      state.ExcrMan.excrman_acuri,
    excrman_cit:        state.ExcrMan.excrman_cit,
    //7th screen data
    excrwoman_vol:      state.ExcrWoman.excrwoman_vol,
    excrwoman_ca:       state.ExcrWoman.excrwoman_ca,
    excrwoman_ox:       state.ExcrWoman.excrwoman_ox,
    excrwoman_p:        state.ExcrWoman.excrwoman_p,
    excrwoman_acuri:    state.ExcrWoman.excrwoman_acuri,
    excrwoman_cit:      state.ExcrWoman.excrwoman_cit
    
})
  
const mapDispatchToProps = dispatch => ({
    setInitParamValue: () => { dispatch(setInitParamValue())},
    setInitBioValue: () => { dispatch(setInitBioValue()) },
    setInitMajValue: () => { dispatch(setInitMajValue()) },
    setInitMinValue: () => { dispatch(setInitMinValue()) },
    setInitExManValue: () => { dispatch(setInitExManValue()) },
    setInitExWomanValue: () => { dispatch(setInitExWomanValue()) },
    setInitHelp: () => { dispatch(setInitHelp())}
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultScreen)