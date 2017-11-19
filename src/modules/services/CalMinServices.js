/**
 * @Param Reducer
 */

const CALMIN_OXCM = "SCREEN_CALMIN_OXCM"
const CALMIN_OXCD = "SCREEN_CALMIN_OXCD"
const CALMIN_HIDROX = "SCREEN_CALMIN_HIDROX"
const CALMIN_BRUS = "SCREEN_CALMIN_BRUS"
const CALMIN_ACURI = "SCREEN_CALMIN_ACURI"
const CALMIN_URA = "SCREEN_CALMIN_URA"
const CALMIN_INIT = "SCREEN_CALMIN_INIT"

const initialState = {

    calmin_oxcm: false,
    calmin_oxcd: false,
    calmin_hidrox: false,
    calmin_brus: false,
    calmin_acuri: false,
    calmin_ura: false
}

export default function reducer(state = initialState, action = {}) {
    console.log('reducer', action)
    switch (action.type) {
        case CALMIN_OXCM:
            return{
                ...state,
                calmin_oxcm: action.oxcm
            }
        case CALMIN_OXCD:
            return{
                ...state,
                calmin_oxcd: action.oxcd
            }
        case CALMIN_HIDROX:
            return{
                ...state,
                calmin_hidrox: action.hidrox
            } 
        case CALMIN_BRUS:
            return{
                ...state,
                calmin_brus: action.brus
            } 
        case CALMIN_ACURI:
            return{
                ...state,
                calmin_acuri: action.acuri
            } 
        case CALMIN_URA:
            return{
                ...state,
                calmin_ura: action.ura
            } 
        case CALMIN_INIT:
            return{
                ...state,
                calmin_oxcm: false,
                calmin_oxcd: false,
                calmin_hidrox: false,
                calmin_brus: false,
                calmin_acuri: false,
                calmin_ura: false
            }                     
        default:
            return state;
    }
}

export function setInitMinValue(){
    return {
        type: CALMIN_INIT
    }
}

export function setMinOxcm(value) {
    return {
        type: CALMIN_OXCM,
        oxcm: value
    }
}

export function setMinOxcd(value) {
    return {
        type: CALMIN_OXCD,
        oxcd: value
    }
}

export function setMinHidrox(value) {
    return {
        type: CALMIN_HIDROX,
        hidrox: value
    }
}

export function setMinBrus(value) {
    return {
        type: CALMIN_BRUS,
        brus: value
    }
}
export function setMinAcuri(value) {
    return {
        type: CALMIN_ACURI,
        acuri: value
    }
}
export function setMinUra(value) {
    return {
        type: CALMIN_URA,
        ura: value
    }
}
