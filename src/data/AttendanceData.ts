import i18n from "../i18n"

export type AttendanceType={
    id:number,
    name:string,
    date:string,
    timings:string
}

export const attendData:AttendanceType[]=[
    {
        id:101,
        name:i18n.t("staffTable.watsonJoyce"),
        date:"16-Apr-2026",
        timings:"9am to 6pm",
    },
    {
        id:102,
        name:i18n.t("staffTable.watsonJoyce"),
        date:"16-Apr-2026",
        timings:"9am to 6pm"
    },
    {
        id:103,
        name:i18n.t("staffTable.watsonJoyce"),
        date:"16-Apr-2026",
        timings:"9am to 6pm"
    },
    {
        id:104,
        name:i18n.t("staffTable.watsonJoyce"),
        date:"16-Apr-2026",
        timings:"9am to 6pm"
    },

]
