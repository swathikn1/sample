import DishIcon from '../assets/DashboardImage/dish.svg'
import EditIcon from '../assets/CategoryImage/edit.svg'
import DeleteIcon from '../assets/CategoryImage/delete.svg'

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
    name:"Chicken Parmesan",
    id:101,
    stock:"119 items",
    category:"Chicken",
    price:"$55",
    availability:"In Stock",
    edit:EditIcon,
    delete:DeleteIcon
  },
  {
    product:DishIcon,
    name: "Chicken Parmesan",
    id: 101,
    stock: "119 items",
    category:"Chicken",
    price:"$55",
    availability:"In Stock",
    edit:EditIcon,
    delete:DeleteIcon
    
  },
  {
    product:DishIcon,
    name: "Chicken Parmesan",
    id: 101,
    stock: "119 items",
    category:"Chicken",
    price:"$55",
    availability:"In Stock",
    edit:EditIcon,
    delete:DeleteIcon
  },
  {
    product:DishIcon,
    name: "Chicken Parmesan",
    id: 101,
    stock: "119 items",
    category:"Chicken",
    price:"$55",
    availability:"In Stock",
    edit:EditIcon,
    delete:DeleteIcon
  },
  {
    product:DishIcon,
    name: "Chicken Parmesan",
    id: 101,
    stock: "119 items",
    category:"Chicken",
    price:"$55",
    availability:"In Stock",
    edit:EditIcon,
    delete:DeleteIcon
  },
  {
    product:DishIcon,
    name: "Chicken Parmesan",
    id: 101,
    stock: "119 items",
    category:"Chicken",
    price:"$55",
    availability:"In Stock",
    edit:EditIcon,
    delete:DeleteIcon
  }

]