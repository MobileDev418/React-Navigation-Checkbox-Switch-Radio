/**
 * @Param Reducer
 */

const EXCRMAN_VOL = "SCREEN_EXCRMAN_VOL"
const EXCRMAN_CA = "SCREEN_EXCRMAN_CA"
const EXCRMAN_OX = "SCREEN_EXCRMAN_OX"
const EXCRMAN_P = "SCREEN_EXCRMAN_P"
const EXCRMAN_ACURI = "SCREEN_EXCRMAN_ACURI"
const EXCRMAN_CIT = "SCREEN_EXCRMAN_CIT"
const EXCRMAN_INIT = "SCREEN_EXCRMAN_INIT"

const initialState = {

    excrman_vol: false,
    excrman_ca: false,
    excrman_ox: false,
    excrman_p: false,
    excrman_acuri: false,
    excrman_cit: false
}

export default function reducer(state = initialState, action = {}) {
    console.log('reducer', action)
    switch (action.type) {
        case EXCRMAN_VOL:
            return{
                ...state,
                excrman_vol: action.vol
            }
        case EXCRMAN_CA:
            return{
                ...state,
                excrman_ca: action.ca
            }
        case EXCRMAN_OX:
            return{
                ...state,
                excrman_ox: action.ox
            } 
        case EXCRMAN_P:
            return{
                ...state,
                excrman_p: action.p
            } 
        case EXCRMAN_ACURI:
            return{
                ...state,
                excrman_acuri: action.acuri
            } 
        case EXCRMAN_CIT:
            return{
                ...state,
                excrman_cit: action.cit
            } 
        case EXCRMAN_INIT:
            return{
                ...state,
                excrman_vol: false,
                excrman_ca: false,
                excrman_ox: false,
                excrman_p: false,
                excrman_acuri: false,
                excrman_cit: false
            }                     
        default:
            return state;
    }
}

export function setInitExManValue(){
    return {
        type: EXCRMAN_INIT
    }
}

export function setExManVol(value) {
    return {
        type: EXCRMAN_VOL,
        vol: value
    }
}

export function setExManCa(value) {
    return {
        type: EXCRMAN_CA,
        ca: value
    }
}

export function setExManOx(value) {
    return {
        type: EXCRMAN_OX,
        ox: value
    }
}

export function setExManP(value) {
    return {
        type: EXCRMAN_P,
        p: value
    }
}
export function setExManAcuri(value) {
    return {
        type: EXCRMAN_ACURI,
        acuri: value
    }
}
export function setExManCit(value) {
    return {
        type: EXCRMAN_CIT,
        cit: value
    }
}
