import {Card,CardContent,CardHeader,CardTitle,} from "../../components/ui/card"
import {Field,FieldGroup,FieldLabel,} from "../../components/ui/field"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import ProfileIcon from '../../assets/ProfileImage/Profile.svg'
import AccessIcon from '../../assets/ProfileImage/Access.svg'
import LogIcon from '../../assets/ProfileImage/Logout.svg'
import { Avatar, AvatarImage } from "../../components/ui/avatar"
import { useTranslation } from "react-i18next"

export default function ProfileCard(){
  const {t}=useTranslation()
    return(
        <div className="grid grid-flow-col gap-6 items-start ml-[-63px] mt-[20px]">
<Card>
  <CardContent>
    <div className="flex flex-col w-[319px] h-[236px] gap-7 items-center ml-[-17px]">
    <Button className="hover:bg-[#FAC1D9] hover:text-black bg-[#292C2D] w-[279px] h-[52px]">
        <span><img src={ProfileIcon}></img></span>{t("profile.myProfile")}</Button>
    <Button className="hover:bg-[#FAC1D9] hover:text-black bg-[#292C2D] w-[279px] h-[52px]">
        <span><img src={AccessIcon}></img></span>{t("profile.manageAccess")}</Button>
    <Button className="hover:bg-[#FAC1D9] hover:text-black bg-[#292C2D] w-[279px] h-[52px]">
        <span><img src={LogIcon}></img></span>{t('profile.logOut')}</Button>
    </div>
  </CardContent>
</Card>

<div>
<Card className="h-[700px] w-[824px] ">
  <CardHeader>
    <CardTitle className="font-medium text-[25px]">{t("profile.personal")}</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="flex flex-row">
   <Avatar className='w-[141px] h-[141px] mt-[-27px]'>
  <AvatarImage src="https://github.com/evilrabbit.png"/>
</Avatar>
<div>
<h1 className="font-medium text-[25px] ml-[12px]">{t("profile.johnDoe")}</h1>
<p className="text-[#FAC1D9] font-light ml-[12px]">{t("profile.manager")}</p>
  </div>
  </div>
  </CardContent>


{/* Input  */}
  <CardContent>
        <FieldGroup>
      <Field>
        <FieldLabel htmlFor="fieldgroup-name" className="font-medium text-[16px]" >{t("profile.firstName")}</FieldLabel>
        <Input id="fieldgroup-name" placeholder="John Doe" className="bg-[#3D4142] border-neutral-800 w-[744px] h-[43px]" />
      </Field>
      <Field>
        <FieldLabel htmlFor="fieldgroup-email">{t("profile.email")}</FieldLabel>
        <Input className="bg-[#3D4142] border-neutral-800 w-[744px] h-[43px]"
          id="fieldgroup-email"
          type="email"
          placeholder="johndoe123@gmail.com"
        />
      </Field>
      <Field>
        <FieldLabel htmlFor="fieldgroup-name" className="font-medium text-[16px]" >{t("profile.address")}</FieldLabel>
        <Input id="fieldgroup-name" placeholder="123 Street USA, Chicago" className="bg-[#3D4142] border-neutral-800 w-[744px] h-[43px]" />
      </Field>

       <div className="flex flex-row gap-2">
         <Field>
        <FieldLabel htmlFor="fieldgroup-name" className="font-medium text-[16px]">{t("profile.newPassword")}</FieldLabel>
        <Input id="fieldgroup-name"className="bg-[#3D4142] border-neutral-800 w-[744px] h-[43px]" />
      </Field>
      <Field>
        <FieldLabel htmlFor="fieldgroup-name" className="font-medium text-[16px]">{t("profile.confirmPassword")}</FieldLabel>
        <Input id="fieldgroup-name" placeholder="****" className="bg-[#3D4142] border-neutral-800 w-[744px] h-[43px]" />
      </Field>
      </div>

      <Field orientation="horizontal" className="ml-[480px]">
        <Button className="hover:bg-[#FAC1D9] hover:text-black">{t('profile.discardChanges')}</Button>
        <Button className="hover:bg-[#FAC1D9] hover:text-black">{t('profile.saveChanges')}</Button>
      </Field>
    </FieldGroup>
  </CardContent>
</Card>
</div>
</div>
    )
}

