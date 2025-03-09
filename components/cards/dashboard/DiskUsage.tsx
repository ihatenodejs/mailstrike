import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { FiHardDrive } from "react-icons/fi"

export default function DiskUsage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center">
          <FiHardDrive className="mr-2" />
          Disk Usage
        </div>
      </CardHeader>
      <CardContent>
        <Progress value={30} className="mb-2" />
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">30GB</span>
          <span className="text-2xl font-bold">300GB</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">in use</span>
          <span className="text-sm text-gray-500">allocated</span>
        </div>
      </CardContent>
    </Card>
  )
}