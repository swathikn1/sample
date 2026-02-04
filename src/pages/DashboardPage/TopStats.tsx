import { useTranslation } from "react-i18next";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"

type TopStatsType = {
    title:string;
    price:string;
    img: string;
    footer:string;
    line:string;
}

export default function TopStats({title,price,img,footer,line}:TopStatsType) {
  const {t}=useTranslation()
  return (
<Card className="w-[369.23px] h-[200px] shrink-0 font-bold">
  <CardHeader className="pb-2">
    <div className="flex items-center justify-between">
      <div>
        <CardTitle className="font-light font-[poppins] text-[16px]">{t(title)}</CardTitle>
        <CardDescription className="font-medium text-[25px]">{price}</CardDescription>
      </div>
      <CardAction>
      <img src={img} alt={title} className="w-8 h-8"/></CardAction>
    </div>
  </CardHeader>
  <div className="px-6 grid grid-cols-2 items-end">
    <p className="font-light text-[16px] text-[#777979] mb-[10px]">{footer}</p>
    <div className="flex justify-end mt-[21px]">
      <img src={line}/>
  </div>
  </div>
</Card>
  )
}
