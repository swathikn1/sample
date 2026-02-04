import i18n from '../i18n'

export type StaffDataType = {
  id:number
  name:string
  email:string
  phone:number
  age:number
  salary:number
  timings:string
}

export const staffData:StaffDataType[]=[
    {
        id:101,
        name:i18n.t("staffTable.watsonJoyce"),
        email:"watsonjoyce112@gmail.com",
        phone:+1234567890,
        age:45,
        salary:2200,
        timings:"9am to 6pm"
    },
    {
        id:102,
        name:i18n.t("staffTable.watsonJoyce"),
        email:"watsonjoyce112@gmail.com",
        phone:+1234567890,
        age:45,
        salary:2200,
        timings:"9am to 6pm"
    },
    {
        id:103,
        name:i18n.t("staffTable.watsonJoyce"),
        email:"watsonjoyce112@gmail.com",
        phone:+1234567890,
        age:45,
        salary:2200,
        timings:"9am to 6pm"
    },
    {
        id:104,
        name:i18n.t("staffTable.watsonJoyce"),
        email:"watsonjoyce112@gmail.com",
        phone:+1234567890,
        age:45,
        salary:2200,
        timings:"9am to 6pm"
    },
    {
        id:105,
        name:i18n.t("staffTable.watsonJoyce"),
        email:"watsonjoyce112@gmail.com",
        phone:+1234567890,
        age:45,
        salary:2200,
        timings:"9am to 6pm"
    }
]