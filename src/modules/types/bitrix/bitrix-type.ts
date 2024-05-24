import { BitrixUser } from "../report/report-type"

export type BitrixTask = {

    accomplices: []
    accomplicesData: []
    activityDate: "2017-12-29T13:07:19+03:00"
    addInReport: "N"
    allowChangeDeadline: "Y"
    allowTimeTracking: "N"
    auditors: []
    auditorsData: []
    changedBy: "1"
    changedDate: "2017-12-29T13:07:19+03:00"
    closedBy: "81"
    closedDate: "2017-12-29T13:06:18+03:00"
    commentsCount: null
    createdBy: "1"
    createdDate: "2017-12-29T12:15:42+03:00"
    creator: BitrixUser
    dateStart: "2017-12-29T13:04:29+03:00"
    deadline: "2017-12-29T15:00:00+03:00"
    description: ""
    descriptionInBbcode: "Y"
    durationFact: null
    durationPlan: null
    durationType: "days"
    endDatePlan: null
    exchangeId: null
    exchangeModified: null
    favorite: "N"
    forkedByTemplateId: null
    forumId: null
    forumTopicId: null
    group: []
    groupId: "0"
    guid: "{9bd11fb5-8e76-4379-b3be-1f4cbe9bae1d}"
    id: "4709"
    isMuted: "N"
    isPinned: "N"
    isPinnedInGroup: "N"
    mark: "P"
    matchWorkTime: "N"
    multitask: "N"
    newCommentsCount: 0
    notViewed: "N"
    outlookVersion: "4"
    parentId: null
    priority: "0"
    replicate: "N"
    responsible: BitrixUser
    responsibleId: "81"
    serviceCommentsCount: null
    siteId: "s1"
    sorting: null
    stageId: "0"
    startDatePlan: null
    status: "5"
    statusChangedBy: "81"
    statusChangedDate: "2017-12-29T13:06:18+03:00"
    subStatus: "5"
    subordinate: "N"
    taskControl: "N"
    timeEstimate: "0"
    timeSpentInLogs: null
    title: string
    viewedDate: "2017-12-29T19:44:28+03:00"
    xmlId: null
}

// STATUS	Статус	enum	2 - Ждет выполнения,
// 3 - Выполняется,
// 4 - Ожидает контроля,
// 5 - Завершена,
// 6 - Отложена.
// По умолчанию - 2