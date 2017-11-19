/**
 * @Param Reducer
 */

const EXCRWOMAN_VOL = "SCREEN_EXCRWOMAN_VOL"
const EXCRWOMAN_CA = "SCREEN_EXCRWOMAN_CA"
const EXCRWOMAN_OX = "SCREEN_EXCRWOMAN_OX"
const EXCRWOMAN_P = "SCREEN_EXCRWOMAN_P"
const EXCRWOMAN_ACURI = "SCREEN_EXCRWOMAN_ACURI"
const EXCRWOMAN_CIT = "SCREEN_EXCRWOMAN_CIT"
const EXCRWOMAN_INIT = "SCREEN_EXCRWOMAN_INIT"

const initialState = {

    excrwoman_vol: false,
    excrwoman_ca: false,
    excrwoman_ox: false,
    excrwoman_p: false,
    excrwoman_acuri: false,
    excrwoman_cit: false
}

export default function reducer(state = initialState, action = {}) {
    console.log('reducer', action)
    switch (action.type) {
        case EXCRWOMAN_VOL:
            return{
                ...state,
                excrwoman_vol: action.vol
            }
        case EXCRWOMAN_CA:
            return{
                ...state,
                excrwoman_ca: action.ca
            }
        case EXCRWOMAN_OX:
            return{
                ...state,
                excrwoman_ox: action.ox
            } 
        case EXCRWOMAN_P:
            return{
                ...state,
                excrwoman_p: action.p
            } 
        case EXCRWOMAN_ACURI:
            return{
                ...state,
                excrwoman_acuri: action.acuri
            } 
        case EXCRWOMAN_CIT:
            return{
                ...state,
                excrwoman_cit: action.cit
            } 
        case EXCRWOMAN_INIT:
            return{
                ...state,
                excrwoman_vol: false,
                excrwoman_ca: false,
                excrwoman_ox: false,
                excrwoman_p: false,
                excrwoman_acuri: false,
                excrwoman_cit: false
            }                     
        default:
            return state;
    }
}

export function setInitExWomanValue(){
    return {
        type: EXCRWOMAN_INIT
    }
}

export function setExWomanVol(value) {
    return {
        type: EXCRWOMAN_VOL,
        vol: value
    }
}

export function setExWomanCa(value) {
    return {
        type: EXCRWOMAN_CA,
        ca: value
    }
}

export function setExWomanOx(value) {
    return {
        type: EXCRWOMAN_OX,
        ox: value
    }
}

export function setExWomanP(value) {
    return {
        type: EXCRWOMAN_P,
        p: value
    }
}
export function setExWomanAcuri(value) {
    return {
        type: EXCRWOMAN_ACURI,
        acuri: value
    }
}
export function setExWomanCit(value) {
    return {
        type: EXCRWOMAN_CIT,
        cit: value
    }
}
