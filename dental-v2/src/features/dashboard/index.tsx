
import React from 'react'
import Header from '../../utils/components/Header'
import { DashboardTitle } from '../../utils/constants/constants'
import Footer from '../../utils/components/Footer'
import BodyContent from './components/BodyContent'

function DashboardIndex() {
  return (
    <>
    <Header content={DashboardTitle}></Header>
    <BodyContent></BodyContent>
    <Footer></Footer>
    </>
  )
}

export default DashboardIndex