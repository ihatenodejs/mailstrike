import { ThemeSelect } from "@/components/buttons/ThemeSelect"
import Image from "next/image"

interface HeaderProps {
  pageTitle: string;
}

export default function Header({ pageTitle }: HeaderProps) {
  return (
    <header className="flex items-center justify-between w-full h-16 px-4 bg-background border-b border-gray-200">
      <div className="flex items-center">
        <h1 className="ml-4 text-lg font-semibold">{pageTitle}</h1>
      </div>
      <div className="flex items-center">
        <ThemeSelect className="mr-4" />
        <Image
          src="https://dummyimage.com/100/000/fff"
          width={34}
          height={34}
          alt="Avatar"
          className="border border-input rounded-full"
        />
      </div>
    </header>
  )
}