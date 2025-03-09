import { SidebarTrigger } from "@/components/ui/sidebar"
import Image from "next/image"

interface HeaderProps {
  pageTitle: string;
}

export default function Header(
  { pageTitle }: HeaderProps
) {
  return (
    <header className="flex items-center justify-between w-full h-16 px-4 bg-white border-b border-gray-200">
      <div className="flex items-center">
        <SidebarTrigger />
        <h1 className="ml-4 text-lg font-semibold">{pageTitle}</h1>
      </div>
      <div className="flex items-center">
        <Image
          src="https://dummyimage.com/100/000/fff"
          width={32}
          height={32}
          alt="Avatar"
          className="border border-foreground rounded-full"
        />
      </div>
    </header>
  )
}