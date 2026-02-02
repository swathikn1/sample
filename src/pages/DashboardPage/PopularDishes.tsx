import {
  Card,
//   CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"


type PopularDataType = {
    dish:string;
    serving:string;
    stock: string;
    price:string;
    img:string
}

export default function PopularDish({dish,serving,stock,price,img}:PopularDataType) {
  return (
   <Card className="font-bold w-[505px] h-[77px] rounded-[7.43px] bg-[#3D4142] ">
  <CardHeader className="flex items-center justify-between" >
  <div className="flex items-center gap-3">
  <img src={img} alt={dish}  className="w-[89.15px] h-[66.86px] rounded-[5.2px] mt-[-20px] ml-[-19px]" />
  <div className="mt-[-12px]">  
    <CardTitle className="font-light text-16 ">{dish}</CardTitle>
    <CardDescription className="text-[#777979] font-normal text-[14px]">{serving}</CardDescription>
  </div>
</div>

    <div className="flex flex-col justify-end text-right items-end mr-[-30px] mt-[-19px]">
  <CardContent className={`font-normal text-[16px] ${stock === "Out of Stock" ? "text-[#F60000]" : "text-[#FAC1D9]"}`}>{stock}</CardContent>
  <CardFooter className="font-normal text-[14px] text-white">
    <p>{price}</p>
  </CardFooter>
  </div>
  </CardHeader>
  
</Card>
  )
}
