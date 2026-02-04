import { useTranslation } from "react-i18next"
import { Button } from "../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const changeLanguage=(lang:string) => {i18n.changeLanguage(lang)
    localStorage.setItem("lang", lang)
  }

  const currentLang=i18n.language==="ja"?"日本語":"English"
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-[140px] ml-[956px]">{currentLang} </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[140px]">
        <DropdownMenuItem onClick={()=>changeLanguage("en")}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={()=>changeLanguage("ja")}>日本語</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
