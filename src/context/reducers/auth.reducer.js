import { authActions } from "../actions/auth.actions";

export const authReducer = ( state = {}, action ) => {
    
    switch( action.type ){

        case authActions.login:
            return {
                ...action.payload,
                logget: true
            }

        case authActions.logout:
            return {
                logged: false
            }

        default:
            return state
    }
}
