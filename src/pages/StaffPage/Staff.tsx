import { useTranslation } from 'react-i18next'
import Arrow from '../../assets/DashboardImage/arrow.svg'
import { Button } from '../../components/ui/button'
import { StaffManagement } from './StaffManagement'
import { useNavigate } from '@tanstack/react-router'


export default function Staff() {
    const navigate=useNavigate()
    const {t}=useTranslation()

  return (
    <>
    <div className="flex flex-row gap-4 mt-4">
    <img src={Arrow} alt="title" className="w-8 h-8 ml-[-82px]"></img>
    <h1 className="text-white text-xl mt-[3px]">{t('staff.staffManage')}</h1>
    </div>
    <h1 className="text-white text-xl mt-[3px] mt-[38px] ml-[-82px]">Staff(5)</h1>
    <div className='flex gap-3 mt-4 ml-[-82px] font-medium text-16'>
    <Button className='w-[195px] h-[52px] bg-black hover:bg-[#FAC1D9] hover:text-black'>{t('staff.staffManage')}</Button>
    <Button className='w-[195px] h-[52px] hover:bg-[#FAC1D9] hover:text-black' onClick={()=>navigate({to:"/attendance"})}>{t('staff.attendance')}</Button>
    </div>
    <StaffManagement/>
    </>
  )
}