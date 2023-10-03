import React, { useState } from 'react';
import LoginForm from './login';
import SignupForm from './signup'; 

const Usermanager = () => {
  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      {toggle ? (
        <>
           <LoginForm />  
          <button onClick={toggleHandler}>Switch to Signup</button>
        </>
      ) : (
        <>
          <SignupForm />
          <button onClick={toggleHandler}>Switch to Login</button>
        </>
      )}
    </div>
  );
}

export default Usermanager;
