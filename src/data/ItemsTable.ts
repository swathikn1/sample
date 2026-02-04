import DishIcon from '../assets/DashboardImage/dish.svg'
import EditIcon from '../assets/CategoryImage/edit.svg'
import DeleteIcon from '../assets/CategoryImage/delete.svg'
import i18n from '../i18n'

export type Item = {
  product:string
  name:string
  id:number
  stock:string
  category:string
  price:string
  availability:string
  edit:string
  delete:string
}


export const Items:Item[]= [
  {
    product:DishIcon,
    name:i18n.t("dashboardPage.dish"),
    id:101,
    stock:"119 items",
    category:i18n.t("table.chicken"),
    price:"$55",
    availability:i18n.t("dashboardPage.inStock"),
    edit:EditIcon,
    delete:DeleteIcon
  },
  {
    product:DishIcon,
    name:i18n.t("dashboardPage.dish"),
    id: 101,
    stock: "119 items",
    category:i18n.t("table.chicken"),
    price:"$55",
    availability:i18n.t("dashboardPage.inStock"),
    edit:EditIcon,
    delete:DeleteIcon
    
  },
  {
    product:DishIcon,
    name:i18n.t("dashboardPage.dish"),
    id: 101,
    stock: "119 items",
    category:i18n.t("table.chicken"),
    price:"$55",
    availability:i18n.t("dashboardPage.inStock"),
    edit:EditIcon,
    delete:DeleteIcon
  },
  {
    product:DishIcon,
    name:i18n.t("dashboardPage.dish"),
    id: 101,
    stock: "119 items",
    category:i18n.t("table.chicken"),
    price:"$55",
    availability:i18n.t("dashboardPage.inStock"),
    edit:EditIcon,
    delete:DeleteIcon
  },
  {
    product:DishIcon,
    name: i18n.t("dashboardPage.dish"),
    id: 101,
    stock: "119 items",
    category:i18n.t("table.chicken"),
    price:"$55",
    availability:i18n.t("dashboardPage.inStock"),
    edit:EditIcon,
    delete:DeleteIcon
  },
  {
    product:DishIcon,
    name:i18n.t("dashboardPage.dish"),
    id: 101,
    stock: "119 items",
    category:i18n.t("table.chicken"),
    price:"$55",
    availability:i18n.t("dashboardPage.inStock"),
    edit:EditIcon,
    delete:DeleteIcon
  }

]