import { Avatar } from '../MUIcomponets/components'
import { Logo } from '../imageURLs/imageURLS'


function Header({content}: {content: any}) {
  return (
    <div className='Header-container'>
      <header className='Heading-wrapper'>
        <div className="header">
          <img src={Logo} alt="logo" />
          <Avatar>D</Avatar>
        </div>
        <div className="header-comment">
          {content}
        </div>
      </header>
    </div>
  )
}

export default Header