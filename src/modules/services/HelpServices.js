/**
 * @Help Reducer
*/


const HELP1 = "HELP1"
const HELP2 = "HELP2"
const HELP3 = "HELP3"
const HELP4 = "HELP4"
const HELP5 = "HELP5"
const INITHELP  = "HELP" 

const initialState = {
    selHelp1: false,
    selHelp2: false,
    selHelp3: false,
    selHelp4: false,
    selHelp5: false
}

export default function reducer(state = initialState, action = {}) {
    console.log('reducer', action)
    switch (action.type) {

        case HELP1:
            return {
                ...state, 
                selHelp1: action.help
            }
        case HELP2:
            return{
                ...state,
                selHelp2: action.help,
            }
        case HELP3:
            return{
                ...state,
                selHelp3: action.help
            }
        case HELP4:
            return{
                ...state,
                selHelp4: action.help
            }
        case HELP5:
            return{
                ...state,
                selHelp5: action.help
            }
        case INITHELP:
            return{
                ...state,
                selHelp1: false,
                selHelp2: false,
                selHelp3: false,
                selHelp4: false,
                selHelp5: false
            }                     
        default:
            return state;
    }
}

export function setInitHelp(){
    return {
        type: INITHELP
    }
}

export function setHelp1(value) {
    return {
        type: HELP1,
        help: value
    }
}

export function setHelp2(value) {
    return {
        type: HELP2,
        help: value
    }
}

export function setHelp3(value) {
    return {
        type: HELP3,
        help: value
    }
}


export function setHelp4(value) {
    return {
        type: HELP4,
        help: value
    }
}

export function setHelp5(value) {
    return {
        type: HELP5,
        help: value
    }
}
