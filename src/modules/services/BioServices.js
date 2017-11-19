/**
 * @Param Reducer
 */

const BIO_CA = "SCREEN_BIO_CA"
const BIO_OX = "SCREEN_BIO_OX"
const BIO_P = "SCREEN_BIO_P"
const BIO_ACURI = "SCREEN_BIO_ACURI"
const BIO_CIT = "SCREEN_BIO_CIT"
const BIO_MG = "SCREEN_BIO_MG"
const BIO_PH_GT = "SCREEN_BIO_PH_GT"
const BIO_PH_LT = "SCREEN_BIO_PH_LT"
const BIO_INIT = "SCREEN_BIO_INIT"

const initialState = {

    bio_ca: false,
    bio_ox: false,
    bio_p: false,
    bio_acuri: false,
    bio_cit: false,
    bio_mg: false,
    bio_ph_gt: false,
    bio_ph_lt: false
}

export default function reducer(state = initialState, action = {}) {
    console.log('reducer', action)
    switch (action.type) {
        case BIO_CA:
            return{
                ...state,
                bio_ca: action.ca
            }
        case BIO_OX:
            return{
                ...state,
                bio_ox: action.ox
            }
        case BIO_P:
            return{
                ...state,
                bio_p: action.p
            }
        case BIO_ACURI:
            return{
                ...state,
                bio_acuri: action.acuri
            } 
        case BIO_CIT:
            return{
                ...state,
                bio_cit: action.cit
            } 
        case BIO_MG:
            return{
                ...state,
                bio_mg: action.mg
            } 
        case BIO_PH_GT:
            return{
                ...state,
                bio_ph_gt: action.ph_gt
            } 
        case BIO_PH_LT:
            return{
                ...state,
                bio_ph_lt: action.ph_lt
            } 
        case BIO_INIT:
            return{
                ...state,
                bio_ca: false,
                bio_ox: false,
                bio_p: false,
                bio_acuri: false,
                bio_cit: false,
                bio_mg: false,
                bio_ph_gt: false,
                bio_ph_lt: false
            }                     
        default:
            return state;
    }
}

export function setInitBioValue(){
    return {
        type: BIO_INIT
    }
}

export function setBioCa(value) {
    return {
        type: BIO_CA,
        ca: value
    }
}

export function setBioOx(value) {
    return {
        type: BIO_OX,
        ox: value
    }
}

export function setBioP(value) {
    return {
        type: BIO_P,
        p: value
    }
}

export function setBioAcuri(value) {
    return {
        type: BIO_ACURI,
        acuri: value
    }
}

export function setBioCit(value) {
    return {
        type: BIO_CIT,
        cit: value
    }
}
export function setBioMg(value) {
    return {
        type: BIO_MG,
        mg: value
    }
}
export function setBioPhGt(value) {
    return {
        type: BIO_PH_GT,
        ph_gt: value
    }
}
export function setBioPhLt(value) {
    return {
        type: BIO_PH_LT,
        ph_lt: value
    }
}
