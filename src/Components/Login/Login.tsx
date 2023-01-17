import React from 'react'
import './Login.scss'
import union from '../../assets/union.png'
import lendsqr from '../../assets/lendsqr.png'
import pablo from '../../assets/pablo-sign-in.jpg'

const Login = () => {
  return (
    <div className='app_login'>
      <div className='login_logo'>
        <img src={union} alt="logo" />
        <img src={lendsqr} alt="logo" />
      </div>
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
            <input type="password" name='password' placeholder='Password' />
            <p><a href="">FORGOT PASSWORD?</a></p>
            <button>LOG IN</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login