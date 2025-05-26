import React from 'react'
import AnatomySection from './DashboardOverview/AnatomySection'
import HealthStatusCards from './DashboardOverview/HealthStatusCards'

const DashboardMainContent = () => {
  return (
    <div >
        <AnatomySection></AnatomySection>
        <HealthStatusCards></HealthStatusCards>
    </div>
  )
}

export default DashboardMainContent