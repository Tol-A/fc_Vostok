import React from 'react'
import HomeBlock from '../pageСomponents/home/homeBlock/HomeBlock'
import HomeCarusel from '../pageСomponents/home/homeCarusel/HomeCarusel'
import HomeImages from '../pageСomponents/home/homeImegs/HomeImages'
import HomeTraining from '../pageСomponents/home/homeTraining/HomeTraining'
import SchoolEnrollment from '../pageСomponents/home/school_enrollment/SchoolEnrollment'
import HomeText from '../pageСomponents/home/homeText/HomeText'
import HomeForm from '../pageСomponents/home/homeForm/HomeForm'
function HomePage() {
  return (
    <>
      <HomeCarusel/>
      <SchoolEnrollment/>
      <HomeBlock/>
      <HomeTraining/>
      <HomeImages/>
      <HomeText/>
      {/* <HomeForm/> */}
    </>
  )
}

export default HomePage