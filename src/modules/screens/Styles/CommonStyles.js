import StyleSheet from 'react-native-extended-stylesheet'


const commonStyles = {
    nextbtn: {
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
    prevbtn: {
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
    switch: {
        right: 20,
        position: 'absolute', 
        alignItems: 'center', 
        justifyContent:'center'
    },
    paramview: { 
        marginTop: 20, 
        flexDirection: 'row' 
      }
}
export default commonStyles;