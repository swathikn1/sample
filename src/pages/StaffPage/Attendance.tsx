import Arrow from '../../assets/DashboardImage/arrow.svg'
import { Button } from '../../components/ui/button'
import { AttendanceTable } from './AttendanceTable'
import { useNavigate } from '@tanstack/react-router'

export default function Attendance() {
    const navigate=useNavigate()

  return (
    <>
    <div className="flex flex-row gap-4 mt-4">
    <img src={Arrow} alt="title" className="w-8 h-8 ml-[-32px]"></img>
    <h1 className="text-white text-xl mt-[3px]">Staff Management</h1>
    </div>
    <h1 className="text-white text-xl mt-[3px] mt-[38px] ml-[-32px]">Staff(5)</h1>
    <div className='flex gap-3 mt-4 ml-[-32px] font-medium text-16'>
    <Button className='w-[195px] h-[52px] bg-black hover:bg-[#FAC1D9]'>Staff Management</Button>
    <Button className='w-[195px] h-[52px] bg-black hover:bg-[#FAC1D9]' onClick={()=>navigate({to:"/attendance"})}>Attendance</Button>
    </div>
    <AttendanceTable/>
    </>
  )
}