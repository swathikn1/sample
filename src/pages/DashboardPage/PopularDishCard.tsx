import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { popularData } from "../../data/PopularData"
import PopularDish from "./PopularDishes"

export default function PopularDishesCard() {
return(
<Card className="w-[555px] h-[466px]">
  <CardHeader>
    <CardTitle className="font-medium text-[25px]">Popular Dishes</CardTitle>
    <CardAction><a href="" className="underline font-normal text-[16px] text-[#FAC1D9] w-[53px] h-[24px]">See All</a></CardAction>
  </CardHeader>
  <CardContent>
          <div className="flex flex-col gap-3">
        {popularData.map((item, index) => (
          <PopularDish key={index} dish={item.dish} serving={item.serving} stock={item.stock} price={item.price} img={item.img}
          />
        ))}
      </div>
  </CardContent>
</Card>
    )
}
