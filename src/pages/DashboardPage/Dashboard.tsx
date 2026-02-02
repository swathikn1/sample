import TopStats from "./TopStats"
import { topStatsData } from "../../data/TopstatsData"
import Arrow from '../../assets/DashboardImage/arrow.svg'
import PopularDishesCard from "../DashboardPage/PopularDishCard"
import { ChartLineMultiple } from "../DashboardPage/LineChart"


export default function Dashboard() {

  return (
    <>
    <div className="flex flex-row gap-4 mt-4">
    <img src={Arrow} alt="title" className="w-8 h-8 ml-[-82px]"></img>
      <h1 className="text-white text-xl mt-[3px]">Dashboard</h1>
      </div>
      <div className="flex flex-row gap-4 mt-6 ml-[-32px]">
        {topStatsData.map((item, index) => (
          <TopStats key={index} title={item.title} price={item.price} img={item.img} footer={item.footer} line={item.line}
          />
        ))}
      </div>
     <div className="mt-6 flex flex-row gap-10 ml-[-32px]">
  <PopularDishesCard />
  <PopularDishesCard />
</div>
    <div className="mt-6 ml-[-36px]">
        <ChartLineMultiple />
      </div>
    </>
  )
}
