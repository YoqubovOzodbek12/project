import './Header.css'
import Logo from '../../img/logo.svg'
import Bell from '../../img/bell-01.svg'
import User from '../../img/user-image.png'

const Header = () => {
    return (
        <div>
          <div className='header'>
            <div className='header-rigth'>
                    <img className='header-logo' src={Logo} alt="site-logo" />
                   <input className='header-input' type="text" placeholder='Raspberry' />
            </div>

            <div className='header-left'>
                <img className='header-bell' src={Bell} alt="" />
                <img className='header-user' src={User} alt="" />
            </div>
        </div>
       </div>
    )
}

export default Header