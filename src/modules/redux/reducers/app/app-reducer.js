
import { IS_PROD, TESTING_DOMAIN } from '../../../appglobal/global-consts.js';
import { setPreloader } from '../preloader/preloader-reducer';
import { APP_TYPE, ROUTE, setInitialRoute } from '../router/router-reducer';
import { API_METHOD } from '@/types/entity-types';


const COMPANY_PLACEMENT = 'CRM_COMPANY_DETAIL_ACTIVITY'
const DEAL_PLACEMENT = 'CRM_DEAL_DETAIL_TAB'
const LEAD_PLACEMENT = 'CRM_LEAD_DETAIL_TAB'
const LEAD_TIMELINE_PLACEMENT = 'CRM_LEAD_DETAIL_ACTIVITY'
const CALL_CARD = 'CALL_CARD'


//actions
const SET_APP_DEAL = 'SET_APP_DEAL'
const SET_RESIZE_STATUS = 'SET_RESIZE_STATUS'

const SET_APP_DATA = 'SET_APP_DATA'
const SET_APP_LEAD_DATA = 'SET_APP_LEAD_DATA'
const SET_APP_BITRIX_DATA = 'SET_APP_BITRIX_DATA'
const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS'


const initialState = {
    isResized: false,
    initialized: false,

}

const setAppData = (domain, companyId, userId, currentUser, token, dealId) => ({ type: SET_APP_DATA, domain, companyId, userId, currentUser, token, dealId })
const setAppLeadData = (domain, userId, currentUser, token, lead) => ({ type: SET_APP_LEAD_DATA, domain, userId, currentUser, token, lead })
const setAppBitrixData = (company, deal) => ({ type: SET_APP_BITRIX_DATA, company, deal })
const setAppBitrixDeal = (dealId) => ({ type: SET_APP_DEAL, dealId })
const setResizeStatus = (boolean) => ({ type: SET_RESIZE_STATUS, boolean })
const setInitializedSuccess = () => ({ type: SET_INITIALIZED_SUCCESS })


//THUNK
export const setState = (state) => (dispatch, getState) => {
    dispatch({ type: 'SAVE_STATE', state })
}


export const initial = () => async (dispatch, getState) => {
   

}


export const app = (state = initialState, action) => {
    switch (action.type) {

        case SET_APP_DATA:


            const resultState = {
                ...state,
                domain: action.domain,
                company: action.companyId,
                user: action.userId,
                token: action.token,
                dealId: action.dealId,
                currentUser: action.currentUser,

            }

            return resultState


        case SET_APP_BITRIX_DATA:

            return {
                ...state,
                bitrix: {
                    ...state.bitrix,
                    company: action.company,
                    deal: action.deal
                },
                initialized: true
            }
        case SET_APP_DEAL:
            return {
                ...state,
                dealId: action.dealId,
                bitrix: {
                    ...state.bitrix,
                    deal: action.deal
                }
            }

        case SET_RESIZE_STATUS:


            return {
                ...state,
                isResized: action.status
            }
        case SET_INITIALIZED_SUCCESS:

            return {
                ...state,

                initialized: true
            }

        default:
            return state
    }

}



export default app