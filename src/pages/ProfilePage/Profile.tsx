import Arrow from '../../assets/DashboardImage/arrow.svg'
import ProfileCard from '../ProfilePage/ProfileCard'

export default function Profile() {

  return (
    <>
    <div className="flex flex-row gap-4 mt-4">
    <img src={Arrow} alt="title" className="w-8 h-8 ml-[-82px]"></img>
    <h1 className="text-white text-xl mt-[3px]">Profile</h1>
    </div>
    <ProfileCard/>
    </>
  )
}