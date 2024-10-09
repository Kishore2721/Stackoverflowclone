import React from 'react'
import './Forgetpass.css';


const Forgetpass = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className='forgetpass-container'>
        <div className='forgetpass-container-2'>
        <form onSubmit= {handleSubmit}>
            <h3>Forget Password</h3>
            <div className='setpass-email'>
                <label className='pass-email'>Email :</label>
                <input type='email' className='main-email' placeholder='Enter email' onChange={e => e.target.value} />
                <button type='submit'  className='forget-btn'>Reset Password</button>
            </div>
         </form>
        </div>
    </div>
  )
}

export default Forgetpass