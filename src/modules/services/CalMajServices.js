/**
 * @Param Reducer
 */

const CALMAJ_OXCM_PAP = "SCREEN_CALMAJ_OXCM_PAP"
const CALMAJ_OXCM_NOPAP = "SCREEN_CALMAJ_OXCM_NOPAP"
const CALMAJ_OXCD = "SCREEN_CALMAJ_OXCD"
const CALMAJ_HIDROX = "SCREEN_CALMAJ_HIDROX"
const CALMAJ_ESTRU = "SCREEN_CALMAJ_ESTRU"
const CALMAJ_ACURI = "SCREEN_CALMAJ_ACURI"
const CALMAJ_URA_AMO = "SCREEN_CALMAJ_URA_AMO"
const CALMAJ_URA_POTA = "SCREEN_CALMAJ_URA_POTA"
const CALMAJ_URA_SODI = "SCREEN_CALMAJ_URA_SODI"
const CALMAJ_CIST = "SCREEN_CALMAJ_CIST"
const CALMAJ_INIT = "SCREEN_CALMAJ_INIT"

const initialState = {

    calmaj_oxcm_pap: false,
    calmaj_oxcm_nopap: false,
    calmaj_oxcd: false,
    calmaj_hidrox: false,
    calmaj_estru: false,
    calmaj_acuri: false,
    calmaj_ura_amo: false,
    calmaj_ura_pota: false,
    calmaj_ura_sodi: false,
    calmaj_cist: false
}

export default function reducer(state = initialState, action = {}) {
    console.log('reducer', action)
    switch (action.type) {
        case CALMAJ_OXCM_PAP:
            return{
                ...state,
                calmaj_oxcm_pap: action.oxcm_pap
            }
        case CALMAJ_OXCM_NOPAP:
            return{
                ...state,
                calmaj_oxcm_nopap: action.oxcm_nopap
            }
        case CALMAJ_OXCD:
            return{
                ...state,
                calmaj_oxcd: action.oxcd
            }
        case CALMAJ_HIDROX:
            return{
                ...state,
                calmaj_hidrox: action.hidrox
            } 
        case CALMAJ_ESTRU:
            return{
                ...state,
                calmaj_estru: action.estru
            } 
        case CALMAJ_ACURI:
            return{
                ...state,
                calmaj_acuri: action.acuri
            } 
        case CALMAJ_URA_AMO:
            return{
                ...state,
                calmaj_ura_amo: action.amo
            } 
        case CALMAJ_URA_POTA:
            return{
                ...state,
                calmaj_ura_pota: action.pota
            } 
        case CALMAJ_URA_SODI:
            return{
                ...state,
                calmaj_ura_sodi: action.sodi
            }
        case CALMAJ_CIST:
            return{
                ...state,
                calmaj_cist: action.cist
            }
        case CALMAJ_INIT:
            return{
                ...state,
                calmaj_oxcm_pap: false,
                calmaj_oxcm_nopap: false,
                calmaj_oxcd: false,
                calmaj_hidrox: false,
                calmaj_estru: false,
                calmaj_acuri: false,
                calmaj_ura_amo: false,
                calmaj_ura_pota: false,
                calmaj_ura_sodi: false,
                calmaj_cist: false
            }                     
        default:
            return state;
    }
}

export function setInitMajValue(){
    return {
        type: CALMAJ_INIT
    }
}

export function setMajOxcmPap(value) {
    return {
        type: CALMAJ_OXCM_PAP,
        oxcm_pap: value
    }
}

export function setMajOxcmNoPap(value) {
    return {
        type: CALMAJ_OXCM_NOPAP,
        oxcm_nopap: value
    }
}

export function setMajOxcd(value) {
    return {
        type: CALMAJ_OXCD,
        oxcd: value
    }
}

export function setMajHidrox(value) {
    return {
        type: CALMAJ_HIDROX,
        hidrox: value
    }
}

export function setMajEstru(value) {
    return {
        type: CALMAJ_ESTRU,
        estru: value
    }
}
export function setMajAcuri(value) {
    return {
        type: CALMAJ_ACURI,
        acuri: value
    }
}
export function setMajUraAmo(value) {
    return {
        type: CALMAJ_URA_AMO,
        amo: value
    }
}
export function setMajUraPota(value) {
    return {
        type: CALMAJ_URA_POTA,
        pota: value
    }
}
export function setMajUraSodi(value) {
    return {
        type: CALMAJ_URA_SODI,
        sodi: value
    }
}

export function setMajCist(value) {
    return {
        type: CALMAJ_CIST,
        cist: value
    }
}