import {  ComplectFullTitlesEnum, ComplectNumberType, ComplectTitlesEnum, ComplectsAndServicesFullTitlesType, ComplectsAndServicesTitlesType, ComplectsAndServicesTypeNamesEnum} from "./complect-type"
import { ContractDiscountType, ContractNamesType, ContractNumberType, ContractShortNamesEnum, MeasureFullNamesType, MeasureNamesType } from "./contract-type"
import { QuantityForKpType, SupplyNameType, SupplyNamesType, SupplyNumberType, SupplyTypeEnum } from "./supply-type"

export type ProductType = {
    number: number,
    name: ComplectsAndServicesFullTitlesType | ComplectFullTitlesEnum  // `${complect.fullName}`,
    productId: null,
    type: ProductTypesEnum,


    //from complect
    complectNumber: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17
    complectName: ComplectsAndServicesTitlesType // complect.fullName, Гарант-Классик ...
    withConsalting: boolean,
    complectType: ComplectsAndServicesTypeNamesEnum
    abs:  false | number,  //todo 1, 1.5, 2, 3, ...


    //from supply
    supplyNumber: SupplyNumberType
    supplyName: SupplyNameType
    supplyType: SupplyTypeEnum

    quantityForKp: QuantityForKpType
    contractSupplyName: SupplyNamesType

    contractSupplyProp1:
    null |
    'переносной жесткий диск HDD' |
    'переносной flash-накопитель' |
    'переносной жесткий диск HDD' |
    'переносной жесткий диск HDD' |
    'переносной жесткий диск HDD' |
    'переносной жесткий диск HDD' |
    'переносной жесткий диск HDD'


    contractSupplyProp2: string
    contractSupplyPropComment: string
    contractSupplyPropEmail: string
    contractSupplyPropLoginsQuantity: string
    contractSupplyPropSuppliesQuantity: string

    //from contract
    contractName: ContractNamesType
    contractShortName: ContractShortNamesEnum

    contractNumber: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
    measureNumber: 0 | 1 | 2 | 3 | 4 | 5 | 6
    measureId: number
    measureCode: number
    measureName: MeasureNamesType
    measureFullName: MeasureFullNamesType

    prepayment: 1,
    contractCoefficient: 1 | 6 | 12 | 24
    discount: ContractDiscountType


    //from consalting
    contractConsaltingProp: string
    contractConsaltingComment: string


    //star
    isFreeStar?: boolean



    //other
    withPrice: boolean
    withAbs: boolean
    price: false | number
    totalPrice: false | number
    mskPrice: false | number
    regionsPrice: false | number
}

export type ProductTypesType = ProductTypesEnum.GARANT | ProductTypesEnum.LT | ProductTypesEnum.CONSALTING | ProductTypesEnum.STAR
export enum ProductTypesEnum {
    GARANT = 'garant',
    LT = 'lt',
    CONSALTING = 'consalting',
    STAR = 'star'
}

export type ProfProductsType = {
    internet: Array<ProductType>
    proxima: Array<ProductType>
    abonHalf: Array<ProductType>
    abonYear: Array<ProductType>
    abonTwoYears: Array<ProductType>
    licHalf: Array<ProductType>
    licYear: Array<ProductType>
    licTwoYears: Array<ProductType>
}

export type UniversalProductsType = {
    internet: Array<ProductType>
    proxima: Array<ProductType>
    abonHalf: Array<ProductType>
    abonYear: Array<ProductType>
    abonTwoYears: Array<ProductType>
    licHalf: Array<ProductType>
    licYear: Array<ProductType>
    licTwoYears: Array<ProductType>
}


export type GarantProductsType = {
    prof: ProfProductsType
    universal: UniversalProductsType
} 



export type ServiceProductsType = Array<ProductType>

export type ProductStateType = {
    garant: GarantProductsType
    consalting: ServiceProductsType
    legalTech: ServiceProductsType

}


export type PriceType = {

    number: number
    region: 0 | 1                        // 0 - regions 1 - msk
    completName: ComplectTitlesEnum
    complectNumber: ComplectNumberType
    complectType: 0 | 1                  // 0 - internet 1 - proxima
    supplyName: SupplyNameType
    supplyNumber: SupplyNumberType
    contractNumber: ContractNumberType
    contractName: ContractNamesType
    price: number
}


export type PricesType = {
    prof: ProfPricesType
    universal: UniversalPricesType
}
export type ProfPricesType =  Array<PriceType>

export type UniversalPricesType = {
    [key: string]: ProfPricesType
}

export type PriceStateType = {
    prof: ProfPricesType
    universal: UniversalPricesType
    current: {
        prices: Array<ProfPricesType>
        price: number
    }
}