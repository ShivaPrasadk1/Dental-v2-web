import { patientDetails } from '../../../utils/constants/constants'

function Patientdetails() {
  return (
    <>
     <div className="patient-details">
        <span>{patientDetails.title}</span>
      <div className="details-wrapper">
        {Object.keys(patientDetails.details).map((key, index)=>(
          <span>
            {key} <span> {patientDetails.details[key]}</span>
          </span>
        ))}
        </div>
      </div>
    </>
  )
}

export default Patientdetails