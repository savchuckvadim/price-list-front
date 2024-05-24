import { AppDispatchType, AppStateType, InferActionsTypes } from '@/redux/store';
import { pyAPI } from '@/services/py-api';
import { API_METHOD } from '@/types/entity-types';


export type StateType = PriceListState
export type ActionsType = InferActionsTypes<typeof priceListAC>

export enum PricePropType {
    COMPLECT_NUMBER = 'complectNumber',
    SUPPLY_NUMBER = 'supplyNumber',
    COMPLECT_NAME = 'complectName',
    PRICE = 'price',
}

export type Price = {
    id: number
    [PricePropType.COMPLECT_NUMBER]: number
    [PricePropType.SUPPLY_NUMBER]: number
    [PricePropType.COMPLECT_NAME]: string
    [PricePropType.PRICE]: number
}

type PriceListState = {
    prices: Array<Price>,
    filter: {
        prop: PricePropType | null,
        value: string | null,
    },
    current: Array<Price>,
    isFetched: boolean
}


//for initial



const PriceListInitialState = {
    prices: [] as Array<Price>,
    filter: {
        prop: null as PricePropType | null,
        value: null as string | null,
    },
    current: [] as Array<Price>,
    isFetched: false
} as PriceListState




//AC

export const priceListAC = {

    setPriceList: (
        prices: Array<Price>,
    ) =>
        ({ type: 'priceList/SET_FETCHED_PRICES', prices } as const),

    setFilter: (pricePropType: PricePropType, value: string) =>
        ({ type: 'priceList/SET_FILTER', pricePropType, value } as const),
}




const priceList = (state: StateType = PriceListInitialState, action: ActionsType) => {
    switch (action.type) {
        case 'priceList/SET_FETCHED_PRICES':
            return {
                ...state,
                prices: action.prices,
                current: action.prices,
                isFetched: true
            }
        default:
            return state
    }
};

export default priceList