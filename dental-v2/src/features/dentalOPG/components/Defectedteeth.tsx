import React from 'react'
import { Card } from '../../../utils/MUIcomponets/components'
import { defectSample } from '../../../utils/imageURLs/imageURLS'

function Defectedteeth() {
  return (
    <>
        <Card sx={{
        padding: "3%",
        width: "48%",
        height: "200px",
        background: "#000000",
        boxShadow: "0px 2px 2px 0px #525154 inset"
      }} >
        <div className="record-header">
            <img src={defectSample} alt="" />
            <div>
                <p><strong>Tooth 18</strong></p>
                <p>Periodontal bone loss <span className="highlight">80%</span>, Dental calculus <span className="highlight">79%</span>, Signs of caries <span className="highlight">99%</span></p>
            </div>
        </div>
        <div className="record-body">
        </div>

      </Card>
      
    </>
  )
}

export default Defectedteeth