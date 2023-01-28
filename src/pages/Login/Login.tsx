import { Link } from 'react-router-dom'
import './Login.scss'
import union from '../../assets/images/union.png'
import lendsqr from '../../assets/images/lendsqr.png'
import pablo from '../../assets/images/pablo-sign-in.jpg'

const Login = () => {
  return (
    <div className='container'>
      <div className='app_login'>
        <div className='login_logo'>
          <img src={union} alt="logo" />
          <img src={lendsqr} alt="logo" />
        </div>
        <div className='menu-container'>
          <div className='login_menu'>
            <div className='login_img'>
              <img src={pablo} alt="Sign-in illustration" />
            </div>
            <div className='login_prompt'>
              <div className='login_welcome'>
                <h2>Welcome!</h2>
                <p>Enter details to login.</p>
              </div>
              <div className='login_form'>
                <input type="text" name='email' placeholder='Email' />
                <div className='input_wrapper'>
                  <input type="password" name='password' placeholder='Password' />
                  <button><p>SHOW</p></button>
                </div>
                <p><a href="">FORGOT PASSWORD?</a></p>
                <Link to="/dashboard" ><button>LOG IN</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login