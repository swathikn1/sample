"use client"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../../components/ui/chart"
import { Button } from "../../components/ui/button"
import ExportIcon from "../../assets/DashboardImage/export.svg"
import { useTranslation } from "react-i18next"

export const description = "A multiple line chart"
const chartData = [
  { month: "January", sales: 1800, revenue: 2400 },
  { month: "February", sales: 2200 , revenue: 2600 },
  { month: "March", sales: 1600, revenue: 2100 },
  { month: "April", sales: 2000, revenue: 2900 },
  { month: "May", sales: 3100, revenue: 3800 },
  { month: "June", sales: 2600, revenue:4200 },
]

const chartConfig = {
  sales: {
    label: "Sales",
    color: "var(--chart-1)",
  },
  revenue: {
    label: "Revenue",
    color: "var(--primary-foreground)",
  },
} satisfies ChartConfig

export function ChartLineMultiple() {
  const {t}=useTranslation()
  return (
    <Card className="w-[1150px] h-[522px]">
      <div className="flex flex-row ">
      <CardHeader>
        <CardTitle className="font-medium text-[25px]">{t('dashboardPage.overview')}</CardTitle>
      </CardHeader>
         <CardContent className="flex flex-row gap-2 justify-end ml-[638px]">
        <Button className="bg-[#292C2D] hover:bg-[#FAC1D9] hover:text-black font-medium text-16">{t('dashboardPage.monthly')}</Button>
        <Button className="bg-[#292C2D] hover:bg-[#FAC1D9] hover:text-black font-medium text-16">{t('dashboardPage.daily')}</Button>
        <Button className="bg-[#292C2D] hover:bg-[#FAC1D9] hover:text-black font-medium text-16">{t('dashboardPage.weekly')}</Button>
        <Button className="bg-[#292C2D] w-[119.88px] h-[52.18px] text-[#FAC1D9] border-2 border-[#FAC1D9] font-medium text-16"><span><img src={ExportIcon}></img></span>{t('dashboardPage.export')}</Button>
        </CardContent>

        </div>
      <CardContent className="flex flex-row">
        <ChartContainer config={chartConfig} className="w-[1100px] h-[390px]">
          <LineChart 
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis 
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
              />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="sales"
              type="monotone"
              stroke="var(--color-sales)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="revenue"
              type="monotone"
              stroke="var(--color-revenue)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
        </CardContent>
     
    </Card>
  )
}
