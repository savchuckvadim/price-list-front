

export type InfoblockServer = {
    id: number
    code: string

    description: string
    descriptionForSale: string
    groupId: number

    inGroupId: number
    isFree: number
    isLa: number
    isSet: number
    isShowing: number
    name: string
    number: number
    shortDescription: string
    title: string

    created_at: string
    updated_at: string
    weight: string
}

export type Infoblock = {
    name: string
    number: number
    code: string
    checked: boolean
    weight: 0.5 | 1 | 3
    description: string
    isLa: boolean
}



export type InfoblockGroup = {
    groupsName: string
    value: Array<Infoblock>
}