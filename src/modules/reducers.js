import { combineReducers } from 'redux'

import paramReducer from './services/ParamServices'
import calMaj from './services/CalMajServices'
import calMin from './services/CalMinServices'
import Bio from './services/BioServices'
import ExcrMan from './services/ExcrManServices'
import ExcrWoman from './services/ExcrWomanServices'
import Help from './services/HelpServices'

export default combineReducers({
    paramReducer,
    calMaj,
    calMin,
    Bio,
    ExcrMan,
    ExcrWoman,
    Help

})
