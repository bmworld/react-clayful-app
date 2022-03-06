import React from 'react';
import { Link} from 'react-router-dom';

function RegisterPage() {
  return (
    <div className='container'>
      <div className="auth-wrapper">
        <h1>회원가입</h1>
        <form>
          <input placeholder='Apple ID' type="email" name="email"/>
          <input placeholder='Password' type="password" name="password"/>
          <button type="submit">Sign In</button>
          <Link to="login" style={{color:'grey', textDecoration:"none"}}>이미 Apple ID가 있다면? 지금 로그인.</Link>
        </form>
      </div> {/* auth-wrapper */}
    </div> // container
    
  )
}
//////// SCSS 도입해보자 ---!!!!!!!!!!!!!!
export default RegisterPage;