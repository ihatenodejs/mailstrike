import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { TbMailFilled, TbArrowUp } from "react-icons/tb"

export default function TotalMessages() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center">
          <TbMailFilled className="mr-2" />
          Total Messages
        </div>
      </CardHeader>
      <CardContent>
        <span className="text-3xl font-bold">3,283</span>
      </CardContent>
      <CardFooter className="-mt-4">
        <div className="flex items-center">
          <TbArrowUp className="text-green-500 mr-1" />
          <span className="text-green-500">283 messages this week</span>
        </div>
      </CardFooter>
    </Card>
  )
}