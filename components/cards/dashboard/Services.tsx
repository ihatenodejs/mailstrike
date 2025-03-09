import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { TbServer2, TbCheck } from "react-icons/tb"

export default function Services() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center">
          <TbServer2 className="mr-2" />
          Services
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center">
          <TbCheck className="text-green-500 mr-2" />
          <p>MailStrike v0.1.0</p>
        </div>
        <div className="flex items-center">
          <TbCheck className="text-green-500 mr-2" />
          <p>docker-mailserver v15.0.0</p>
        </div>
      </CardContent>
    </Card>
  )
}