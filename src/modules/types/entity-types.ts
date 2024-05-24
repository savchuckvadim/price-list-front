import { number, string } from "prop-types"
// import { Template } from "./template-types"
export enum API_METHOD {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete'
}
export type GeneralEntity = {
    id: number
    [key: string]: any


}
export type InitialEntity = {

}

// export type TemplateInitialAddData = {
//     domain: string
//     type: 'offer' | 'invoice' | 'contract' | 'other'
//     name: string
// }
export enum ENTITY_QUANTITY {

    ENTITY = 'entity',
    ENTITIES = 'entities'

}

export type EntityField = { //template field
    id: number
    number: number
    items: Array<number> // TODO ItemType
    name: string
    code: string
    type: string

    value: string | null | boolean
    description: string | null
    bitixId: string | null
    bitrixTemplateId: string | null

    isGeneral: boolean
    isDefault: boolean
    isRequired: boolean
    isActive: boolean
    isPlural: boolean

}

// export type TemplateAddData = {
//     // id: number
//     parameters: Array<EntityParameter>
//     fields: Array<EntityField>
// }

export type Entity =
    {
        [key: string]: any
    }


export type EntityParameter = {
    // данные для того чтобы можно было запостить сущность
    // например domain или всякое такое
    name: string // 'domain'
    type: string // 'string'
    value: string | null | Array<string>
    items: Array<string>
}


export type InitialEntityData = {
    apiName: string
    title: string
    groups: Array<InitialEntityGroup>
    isCreated?: boolean
}
export type InitialEntityGroup = {
    groupName: string

    isCanAddField: boolean
    isCanDeleteField: boolean
    fields: Array<EntityFormField>
    relations: Array<RelationState>
    // fieldGroups?: Array<Array<EntityFormField>>
    // relations?: Array<EntityFormField>
    isRequired: boolean
    // isCreated?:boolean
    // initialField?:{
    //     [key:string]:any
    // }

}

export type EntityFieldSelectItem = {
    id: number
    name: string
    title: string
    type: string

}


export type EntityFormField = {
    id: number
    title: string
    name: string
    type: 'string' | 'text' | 'data' | 'boolean' | 'img' | 'entity' | 'select'
    apiName: string

    validation: string
    initialValue: string | Array<InitialEntityGroup>
    isCanAddField: boolean
    getSelect?: string | 'portals'
    dependOf?: Array<string> | null
    templatePlace: null
    fields?: Array<EntityFormField>
    items?: Array<EntityFieldSelectItem>
}

export type FormikInitialValues = {
    [key: string]: any
}
export type EntityStateType = {
    items: Array<InitialEntityData>
    type: null | 'entity' | 'entities'
    current: null | any,
    creating: CreatingEntityType
    relation: RelationState
    // fields: [],
}

export type CreatingEntityType = {

    formData: null | InitialEntityData,
    isInitialized: boolean,
    isFetching: boolean,
    isHaveGroup: boolean,

}

export type RelationState = {
    id: number
    [key: string]: any
    groups: Array<InitialEntityGroup>
    apiName: string
    parrentGroupName: string | null
    // parrentGroupName: string | null
    // parrentFieldId: number | null
    isCreating: boolean,
    relationIndex: number
    //     entity: null | GeneralEntity
    //     formData: null | InitialEntityData
}