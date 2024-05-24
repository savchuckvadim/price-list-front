export enum PORTAL_BTX_GROUP {
    SALES = "sales",
    CUP = 'cup',
    TMC = 'tmc',
    SERVICE = 'service',
    EDU = 'edu',
    GENERAL = 'general'
}

export type Portal = {
    bitrixCallingTasksGroup: PortalBtxCallingTasksGroup
    bitrixDeal: PortalBtxDeal
    bitrixLists: Array<PortalBtxList>
    company: PortalBtxCompany
    lead: PortalBtxLead
    departament: PortalBtxDepartament

}

type PortalBtxCallingTasksGroup = {
    bitrixId: number
    group: PORTAL_BTX_GROUP
    id: number
    name: "sales_calling"
    portal_id: number
    title: "Звонки Продажи"
    type: PORTAL_BTX_GROUP
}


type PortalBtxDeal = {
    bitrixfields: Array<PortalBtxField>
    categories: Array<PortalBtxCategory>
    code: "deal"
    id: number
    name: string
    title: string
}
type PortalBtxList = {
    bitrixId: number
    bitrixfields: Array<PortalBtxField>
    group: PORTAL_BTX_GROUP
    id: number
    name: string
    title: string
    type: "kpi" | "history"
}
type PortalBtxCompany = {
    bitrixfields: Array<PortalBtxField>
    code: "company"
    id: number
    name: string
    title: string
}
type PortalBtxLead = {
    bitrixfields: Array<PortalBtxField>
    categories: Array<PortalBtxCategory>
    code: "lead"
    id: number
    name: string
    title: string
}


type PortalBtxDepartament = {
    bitrixId: number
    group: PORTAL_BTX_GROUP
    id: number
    name: string
    title: string
    type: PORTAL_BTX_GROUP
}


///fields
type PortalBtxField = {
    bitrixCamelId: string
    bitrixId: string // todo fld btz id types -> "XO_NAME"
    bitrixfielditems: Array<PortalBtxFieldItem>
    code: string // todo fld btz id types -> "xo_name"
    entity_id: number
    id: number
    name: string
    parent_type: string | "xo"
    title: string
    type: string //"string" | enumeratuion ...
}


type PortalBtxFieldItem = {
    bitrixId: number
    bitrixfield_id: number
    code: string | "nok"
    id: number
    name: string
    title: string
}



//categories and stages
type PortalBtxCategory = {
    bitrixCamelId: string //but number "34"
    bitrixId: string //but number "34"
    code: string | "sales_base"
    group: string | "sales"
    id: number
    isActive: boolean
    name: string

    stages: Array<PortalBtxStage>
    title: string
    type: string
}


type PortalBtxStage = {
    bitrixId: string // "NEW"
    code: string | "cold_new"
    color: string
    id: number
    isActive: boolean
    name: string
    title: string
}