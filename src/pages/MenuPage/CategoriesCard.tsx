import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
  CardContent
} from "../../components/ui/card"

type CategoryType = {
    title:string;
    items:string;
    img: string;
}

export default function Category({title,items,img,}:CategoryType) {
  return (
   <Card className=" w-[152px] h-[146px] top-[119.61px] font-bold hover:bg-[#FAC1D9]">
  <CardHeader>
    <CardAction>
      <img src={img} className="w-8 h-8 fill-current hover:text-[#292C2D]"/>
    </CardAction>
  </CardHeader>
  <CardContent className="font-medium text-16 ">{title}</CardContent>
  <CardFooter className="font-light text-16 mt-[-16px]">
    <p>{items}</p>
  </CardFooter>
</Card>
  )
}
