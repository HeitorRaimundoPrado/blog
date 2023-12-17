import Dashboard from "@/components/Dashboard"
import TopBar from "@/components/TopBar"
import MainInfo from "@/components/create/MainInfo"
import ImagesAndCta from "@/components/create/ImagesAndCta"
import CategoryAndAttributes from "@/components/create/CategoryAndAttributes"
import ScheduleAndPublish from "@/components/create/SchedulePublish"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Create new Article"
}

const Create: React.FC = () => {
  return (
    <>
      <Dashboard />
      <div>
        <TopBar />
        <MainInfo />
        <ImagesAndCta />
        <CategoryAndAttributes />
        <ScheduleAndPublish />
      </div>
    </>
  )
}

export default Create;
