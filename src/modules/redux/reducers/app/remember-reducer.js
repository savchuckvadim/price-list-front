// import { onlineAPI } from "../../../services/april-online-api"
// import { dealAPI } from "../../../services/firebase-api"
// import { rememberCurrentComplect } from "../complect/current-complect-reducer"
// import { rememberContracts } from "../deal/contract-reducer"
// import {  rememberRows, setRememberRows } from "../deal/product-rows-reducer"
// import { setRememberProduct } from "../deal/products-reducer"
// import { rememberGlobal } from "../global/global-reducer"
// import { setRememberOd, supplyActions } from "../od/od-reducer.ts"
// import { setRememberResult } from "../result/result-reducer"


// const SET_IS_REMEMBED_STATUS = 'remember/SET_IS_REMEMBED_STATUS'

// //AC

// export const setIsRemembedStatus = (status) => ({type: SET_IS_REMEMBED_STATUS, status})

// export const getRememberDeal = (dealId, domain) => async (dispatch, getState) => {

//     //DEAL FROM FIREBASE:
//     let deal = await dealAPI.getDeal(dealId, domain)
//     // const testsetdeal  = await onlineAPI.setDeal(deal)
//     // 
    
//     // const dealAprilOnline = await onlineAPI.getDeal(dealId, domain)
  
//     //DEAL FROM APRIL ONLINE
//     //DEAL FROM BITRIX:
//     // const bitrixDeal = await bitrixAPI.getDeal(dealId)
//     //todo generate deal from bitrix 
//     if (!deal) {
//         deal =  await onlineAPI.getDeal(dealId, domain)
//     }


//     if (deal) {
        
//         //FROM SERVER DEAL
//         const global = JSON.parse(deal.global)
//         const currentComplect = JSON.parse(deal.currentComplect)
//         const od = JSON.parse(deal.od)
//         const contract = JSON.parse(deal.contract)
//         const product = JSON.parse(deal.product)
//         const rows = JSON.parse(deal.rows)
//         const result = JSON.parse(deal.result)


//         //todo сохранять current contract только number
//         //select contract будет устанавливаться из initial data +  set global
//         //и далее должен происходить const setCurrentContract = (contractNumber) => ({ type: SET_CURRENT_CONTRACT, contractNumber })

//         //todo od тоже самое
        
//         //SET REMEMBER
//         dispatch(rememberGlobal(global))
//         dispatch(rememberCurrentComplect(currentComplect))
//         dispatch(supplyActions.setRememberOd(od))
//         dispatch(rememberContracts(contract))
//         // dispatch(setRememberResult(result))
//         // dispatch(setRememberProduct(product))
        
//         rows.sets && dispatch(rememberRows(rows))
        
        

//     } else {

        
//     }



// }

// export const newGetRememberDeal = (deal) => async (dispatch, getState) => {

  
//     if (deal) {
        
//         //FROM SERVER DEAL
//         const global = JSON.parse(deal.global)
//         const currentComplect = JSON.parse(deal.currentComplect)
//         const od = JSON.parse(deal.od)
//         const contract = JSON.parse(deal.contract)
//         const product = JSON.parse(deal.product)
//         const rows = JSON.parse(deal.rows)
//         const result = JSON.parse(deal.result)


//         //todo сохранять current contract только number
//         //select contract будет устанавливаться из initial data +  set global
//         //и далее должен происходить const setCurrentContract = (contractNumber) => ({ type: SET_CURRENT_CONTRACT, contractNumber })

//         //todo od тоже самое
        
//         //SET REMEMBER
//         dispatch(rememberGlobal(global))
//         dispatch(rememberCurrentComplect(currentComplect))
//         dispatch(supplyActions.setRememberOd(od))
//         dispatch(rememberContracts(contract))
//         // dispatch(setRememberResult(result))
//         // dispatch(setRememberProduct(product))
        
//         rows.sets && dispatch(rememberRows(rows))
        
        

//     } else {

        
//     }



// }

// export const setRememberDeal = (dealId, userId, domain) => async (dispatch, getState) => {

//     let lastState = getState()
//     let savingOd = {
//         currentOd: {number: lastState.od.currentOd.number},
//         currentOdIndex: lastState.od.currentOdIndex,
//     }
//     let savingContract = {
//         current: lastState.contract.current
//     }
//     let result = {resultItems:  lastState.result.resultItems}

//     const app = {
//         domain: lastState.app.domain,
//         company: lastState.app.company,
//         user: lastState.app.user, //userId
//         currentUser: lastState.app.currentUser, //current bitrix-user
//         token: lastState.app.token,
//         dealId: lastState.app.dealId,
//     }
//     let cutstate = {
//         app: JSON.stringify(app),
//         global: JSON.stringify(lastState.global),
//         currentComplect: JSON.stringify(lastState.currentComplect),
//         od: JSON.stringify(savingOd),
//         result: JSON.stringify(result),
//         contract: JSON.stringify(savingContract),
//         dealName: JSON.stringify(lastState.dealName),
//         product: JSON.stringify(null),
//         rows: JSON.stringify(lastState.rows),
//         //currentSupplyNumber
//         //currentContractNumber
//     }

//     let deal = {
//         ...cutstate,
//         dealId,
//         userId,
//         domain
//     }
//     console.log('lastState.rows')
//     console.log(lastState.rows)
//     let savedDeal1 = await onlineAPI.setDeal(deal)

//     let savedDeal2 = await dealAPI.addDeal(deal)


// }

// const initialState = {
//     isRemembed: false
// }

// export const remember = (state = initialState, action) => {

//     switch (action.type) {
//         case SET_IS_REMEMBED_STATUS:
            
//             return{
//                 ...state,
//                 isRemembed:action.status
//             }
    
//         default:
//             return state
//     }
    
// }