import { AppDispatchType, AppStateType } from "@/redux/store"
import { Price, PricePropType, priceListAC } from "./price-list-reducer"
import { pyAPI } from "@/services/py-api"
import { API_METHOD } from "@/types/entity-types"


type GetStateType = () => AppStateType

//THUNK
export const getPrices = (date: string) => async (dispatch: AppDispatchType, getState: GetStateType) => {

    let resultpriceList = [
        {
            id: 0,
            complectNumber: 0,
            supplyNumber: 0,
            complectName: 'Гарант-Бухгалтер',
            price: 5778
        },
        {
            id: 1,
            [PricePropType.COMPLECT_NUMBER]: 1,
            [PricePropType.SUPPLY_NUMBER]: 0,
            [PricePropType.COMPLECT_NAME]: 'Гарант-Бухгалтер Госсектора',
            [PricePropType.PRICE]: 5778
        },
        {
            id: 2,
            [PricePropType.COMPLECT_NUMBER]: 2,
            [PricePropType.SUPPLY_NUMBER]: 0,
            [PricePropType.COMPLECT_NAME]: 'Гарант-Юрист',
            [PricePropType.PRICE]: 6200
        },
        {
            id: 3,
            [PricePropType.COMPLECT_NUMBER]: 2,
            [PricePropType.SUPPLY_NUMBER]: 0,
            [PricePropType.COMPLECT_NAME]: 'Гарант-Юрист',
            [PricePropType.PRICE]: 6200
        },
        {
            id: 4,
            [PricePropType.COMPLECT_NUMBER]: 2,
            [PricePropType.SUPPLY_NUMBER]: 0,
            [PricePropType.COMPLECT_NAME]: 'Гарант-Юрист',
            [PricePropType.PRICE]: 6200
        },
        {
            id: 5,
            [PricePropType.COMPLECT_NUMBER]: 2,
            [PricePropType.SUPPLY_NUMBER]: 0,
            [PricePropType.COMPLECT_NAME]: 'Гарант-Юрист',
            [PricePropType.PRICE]: 6200
        }
    ] as Array<Price>
   
    const priceList = await pyAPI.service(
        'price',
        API_METHOD.GET,
        'prices',

    ) as Array<Price> | null

    if (priceList && priceList.length) {
        resultpriceList = priceList
        
    }

    dispatch(priceListAC.setPriceList(resultpriceList))
}