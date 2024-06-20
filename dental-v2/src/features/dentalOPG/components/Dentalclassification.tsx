import React from 'react'
import { Card } from '../../../utils/MUIcomponets/components'
import { Teeths, sample } from '../../../utils/imageURLs/imageURLS'

function Dentalclassification() {
  return (
    <>
      <Card sx={{
        padding: "3%",
        width: "48%",
        background: "#000000",
        objectFit: "contain",
        boxShadow: "0px 2px 2px 0px #525154 inset"
      }} >
        <img src={sample} alt=""  />

      <div className="dental-classification">
        <h1>Tooth Chart</h1>

      <img src={Teeths} alt="" width="90%"  />

      </div>

      </Card>
    </>
  )
}

export default Dentalclassification