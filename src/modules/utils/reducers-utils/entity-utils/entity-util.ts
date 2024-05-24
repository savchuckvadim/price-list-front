import { EntityFormField, FormikInitialValues, InitialEntityData, InitialEntityGroup, RelationState } from "@/types/entity-types";


export const getInitialValues = (initialData: InitialEntityData) => {

    let resultInitialData = {

    } as FormikInitialValues

    initialData && initialData.groups && initialData.groups.map((group: InitialEntityGroup) => {
        let itemsFields = [...group.fields]


        group.fields && group.fields.length && group.fields.map((field: EntityFormField) => {

            if (field.type !== 'entity') {
                resultInitialData[field.apiName] = ''
            }

        })
        resultInitialData.relations = {}

        group.relations && group.relations.length && group.relations.map((relation: RelationState, relationIndex: number) => {



            relation.groups.map((rltnGroup: InitialEntityGroup) => {
                resultInitialData.relations[relation.apiName] = []
                // resultInitialData.relations[rltnGroup.groupName][relation.apiName] = []

                resultInitialData.relations[relation.apiName][relationIndex] = {}
                rltnGroup.fields && rltnGroup.fields.length && rltnGroup.fields.map((fld: EntityFormField) => {
                    resultInitialData.relations[relation.apiName][relationIndex][fld.apiName] = ''


                })

                // resultInitialData.relations = [...resultInitialData.relations]
                // resultInitialData.relations[relationIndex][relation.apiName] = getInitialValues(relation)


            })
        })

    })


    return resultInitialData


}