import Arrow from '../../assets/DashboardImage/arrow.svg'
import { categoriesData } from '../../data/CategoriesData'
import Category from './CategoriesCard'
import { Button } from "../../components/ui/button"
import { ItemsTable } from './ItemsTable'
import { useTranslation } from 'react-i18next'

export default function Menu() {
  const {t}=useTranslation()

  return (
    <>
    <div className="flex flex-row gap-4 mt-4">
    <img src={Arrow} alt="title" className="w-8 h-8 ml-[-82px]"></img>
    <h1 className="text-white text-xl mt-[3px]">{t("sidebar.menu")}</h1>
    </div>
    <div className='flex justify-between flex-row'>
    <h1 className="text-white text-xl mt-[29px] ml-[-82px]">{t("menuPage.categories")}</h1>
    <Button className='bg-[#FAC1D9] mt-[17px] text-[#333333] hover:text-white font-medium text-16 mr-[53px]'>{t("menuPage.addCategory")}</Button>
    </div>
    <div className="flex flex-row gap-6 mt-6 ml-[-85px]">
            {categoriesData.map((item, index) => (
              <Category key={index} title={t(item.title)} items={item.items} img={item.img}
              />
            ))}
          </div>
    <h1 className='text-white text-xl mt-[25px] ml-[-82px]'>{t("menuPage.specialMenu")}</h1>
<div className="flex items-center justify-between mt-[25px] ml-[-31px]">
  <div className="flex gap-3 ml-[-58px]">
    <Button className="hover:bg-[#FAC1D9] hover:text-black">{t("menuPage.normalMenu")}</Button>
    <Button className="hover:bg-[#FAC1D9] hover:text-black">{t("menuPage.specialDeals")}</Button>
    <Button className="hover:bg-[#FAC1D9] hover:text-black">{t("menuPage.newYear")}</Button>
    <Button className="hover:bg-[#FAC1D9] hover:text-black">{t("menuPage.desserts")}</Button>
  </div>
  <Button className="hover:bg-[#FAC1D9] hover:text-black mr-[53px]">{t("menuPage.addMenuItem")}</Button>
</div>
<ItemsTable />
    </>
  )
}