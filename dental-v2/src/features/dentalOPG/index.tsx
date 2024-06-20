import { Avatar } from '../../utils/MUIcomponets/components'
import { Logo } from '../../utils/imageURLs/imageURLS'
import Defectedteeth from './components/Defectedteeth'
import Dentalclassification from './components/Dentalclassification'
import Patientdetails from './components/Patientdetails'

function Dentalindex() {

  return (
    <>
      <div className="dental-header">
        <img src={Logo} alt="logo" />
        <Avatar>D</Avatar>
      </div>
      <Patientdetails></Patientdetails>
      <div className="dental-body">
            <Dentalclassification></Dentalclassification>     
            <Defectedteeth></Defectedteeth>   
      </div>
    </>
  )
}

export default Dentalindex