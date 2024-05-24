
export type FetchedFilters = {
    [key: string]: Filter
}
export type Filter = {
    DEFAULT_VALUE?: string
    DISPLAY_VALUES_FORM?: DISPLAY_VALUES_FORM
    FIELD_ID: string //NAME || UF ...
    IBLOCK_ID: number
    IS_REQUIRED: string
    MULTIPLE: string
    NAME: "Название" | "Действие" | string
    PROPERTY_TYPE: boolean
    PROPERTY_USER_TYPE: boolean
    SETTINGS: boolean
    SORT: number
    TYPE: FilterTypes
}
export type DISPLAY_VALUES_FORM = {
    [key: string]: string
    // 258: "Звонок запланирован"
    // 260: "Звонок отказ"
    // 262: "Звонок совершен"
    // 264: "Презентация запланирована"
    // 266: "Презентация проведена"
    // 268: "КП"
    // 270: "Счет"
    // 272: "Оплачен"
    // 274: "Поставка"
    // 276: "Сделка: Отказ"
}
export type KPIAction = {
    id: number
    name: string
    // shortName?: string

}
enum FilterTypes {
    NAME = "NAME",
    DATE = "S:Date",
    MANAGER = "S",
    SOTRUDNIK = "S:employee",
    CRM = "S:ECrm",
}

export type BitrixUser = {
    ACTIVE: boolean
    DATE_REGISTER: string
    EMAIL: string
    ID: number
    IS_ONLINE: string
    LAST_ACTIVITY_DATE: Array<string>
    LAST_LOGIN: string
    LAST_NAME: string
    NAME: string
    PERSONAL_BIRTHDAY: string
    PERSONAL_CITY: string
    PERSONAL_GENDER: string
    PERSONAL_MOBILE: string
    PERSONAL_PHOTO: string
    PERSONAL_WWW: string
    SECOND_NAME: string
    TIMESTAMP_X: Array<string>
    TIME_ZONE_OFFSET: string
    UF_DEPARTMENT: Array<number>
    UF_EMPLOYMENT_DATE: string
    UF_PHONE_INNER: string
    UF_USR_1570437798556: boolean
    USER_TYPE: string
    WORK_PHONE: string
    WORK_POSITION: string
    XML_ID: string
}

export type Callings = {
    all: number,
    30: number
    60: number
    180: number
}
enum CALL_DURATION {
    ALL = 'all',
    HALF = '30',
    MINUTE = '60',
    THREE_MINUTE = '180',
    PRESENTATION = '600'
}
export type KPICall = {
    action: CALL_DURATION
    count: number
    list?: Array<KPIListItem>
}

type KPIListItem = {
    id: number
    crm: string
    name: string
    date: string
    file: string
    link: string
    action: KPIAction
}

export type KPI = {
    id: number
    action: KPIAction
    count: number
    list?: Array<KPIListItem>
}

export type ReportData = {
    user: BitrixUser
    callings: Array<KPICall>
    kpi: Array<KPI>


}

export type ReportDetalization = {
    report: ReportData | null,
    action: KPIAction | null
}