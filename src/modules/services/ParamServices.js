/**
 * @Param Reducer
*/


const PAR_ST = "2SSTONOFF"
const PAR_URI = "2SURIONOFF"
const PAR_SEX = "2SSEX"
const PAR_INIT = "PARAM_INIT"
const PARAM = "PARAM"

const initialState = {
    param: [false, false, false],   // test as array
    par_st: false,
    par_uri: false,
    par_sex: -1
}

export default function reducer(state = initialState, action = {}) {
    console.log('reducer', action)
    switch (action.type) {

        case PARAM:
            return {
                ...state, param: action.arr
            }
        case PAR_ST:
            return{
                ...state,
                par_st: action.stonoff,
            }
        case PAR_URI:
            return{
                ...state,
                par_uri: action.urionoff
            }
        case PAR_SEX:
            return{
                ...state,
                par_sex: action.sex
            }
        case PAR_INIT:
            return{
                ...state,
                par_sex: -1,
                par_st: false,
                par_uri: false
            }                     
        default:
            return state;
    }
}

export function setInitParamValue(){
    return {
        type: PAR_INIT,
        param: false
    }
}

export function setSTonoff(value) {
    return {
        type: PAR_ST,
        stonoff: value
    }
}

export function setURIonoff(value) {
    return {
        type: PAR_URI,
        urionoff: value
    }
}

export function setSEXonoff(value) {
    return {
        type: PAR_SEX,
        sex: value
    }
}


export function setValueToArray(value) {
    alert(value)
    return {
        type:PARAM,
        arr: value
    }
}
