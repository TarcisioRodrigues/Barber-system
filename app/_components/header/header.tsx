import Image from "next/image"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { MenuIcon } from "lucide-react"

export const Header = () => {
  return (
 <Card>
  <CardContent className="flex flex-row justify-between p-5 items-center">
    <Image src="/Logo.png" alt="logo" height={22} width={120}/>
    <Button variant="outline" size="icon" className="p-2">
        <MenuIcon size={18}/>
    </Button>
 </CardContent>
 </Card>
  )
}

