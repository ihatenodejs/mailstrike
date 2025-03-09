import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { TbUserFilled, TbArrowUp } from "react-icons/tb"

export default function TotalUsers() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center">
          <TbUserFilled className="mr-2" />
          Total Users
        </div>
      </CardHeader>
      <CardContent>
        <span className="text-3xl font-bold">140</span>
      </CardContent>
      <CardFooter className="-mt-4">
        <div className="flex items-center">
          <TbArrowUp className="text-green-500 mr-1" />
          <span className="text-green-500">10 users this week</span>
        </div>
      </CardFooter>
    </Card>
  )
}