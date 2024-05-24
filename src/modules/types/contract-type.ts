
// export type ContractStateType = {
//     universal: {
//         internet: Array<ContractType>
//         proxima: []
//     },
//     prof: {
//         internet: [],
//         proxima: []
//     },
// }
export type ContractType = {
    number: ContractNumberType
    aprilName: ContractNamesType
    shortName: ContractShortNamesEnum
    measureNumber: 0 | 1 | 2 | 3 | 4 | 5 | 6
    measureId: number
    measureCode: number
    measureName: MeasureNamesType
    measureFullName: MeasureFullNamesType
    prepayment: 1,
    contractCoefficient: ContractCoefficientsType
    discount: ContractDiscountType
    type: ContractTypesType

}


export type ContractNumberType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7

export type ContractNamesType =
    'Интренет' |
    'Договор услуг' |
    'Абонентский полгода' |
    'Абонентский год' |
    'Лицензионный полгода' |
    'Лицензионный год' |
    'Абонентский 2 года' |
    'Лицензионный 2 года'


export enum ContractShortNamesEnum {
    internet = 'internet',
    proxima = 'proxima',
    abonHalf = 'abonHalf',
    abonYear = 'abonYear',
    licHalf = 'licHalf',
    licYear = 'licYear',
    abonTwoYears = 'abonTwoYears',
    licTwoYears = 'licTwoYears',
}
export type ContractShortNamesType = 'internet' |
    'proxima' |
    'abonHalf' |
    'abonYear' |
    'licHalf' |
    'licYear' |
    'abonTwoYears' |
    'licTwoYears'



export type MeasureNumberType = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type MeasureNamesType =
    'мес.' |
    'абон. 6 мес.' |
    'абон. 12 мес.' |
    'лиц. 6 мес.' |
    'лиц. 12 мес.' |
    'абон. 24 мес.' |
    'лиц. 24 мес.'

export type MeasureFullNamesType =
    'Месяц' |
    'Абонемент 6 месяцев' |
    'Абонемент 12 месяцев' |
    'Лицензия 6 месяцев' |
    'Лицензия 12 месяцев' |
    'Абонемент 24 месяцев' |
    'Лицензия 24 месяцев'


export type ContractCoefficientsType = 1 | 6 | 12 | 24
export type ContractDiscountType = 1 | 0.9 | 0.8 | 0.7



export type AllContractsType = {
    universal: ContractGroupType
    prof: ContractGroupType
}
export type ContractGroupType = {
    [c: string]: Array<ContractType>


}

type ContractTypesType = 'internet' | 'proxima'