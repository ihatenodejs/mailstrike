import TotalUsers from "@/components/cards/dashboard/TotalUsers"
import TotalMessages from "@/components/cards/dashboard/TotalMessages"
import DiskUsage from "@/components/cards/dashboard/DiskUsage"
import Services from "@/components/cards/dashboard/Services"
import Header from '@/components/Header'

export default function Admin() {
  return (
    <div>
      <Header pageTitle="Dashboard" />
      <div className="p-4 pb-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <TotalUsers />
        <TotalMessages />
        <DiskUsage />
      </div>
      <div className="p-4 pb-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Services />
      </div>
    </div>
  )
}