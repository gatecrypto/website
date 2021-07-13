import React from 'react';

const SignIn = () => {
  return (
    <div className='text-blue-800 text-center'>
      <p className='text-6xl mx-auto'>Sign In</p>
      <div>
        <p className='text-xl'>Username or email</p>
        <input type='text' placeholder='username' />
      </div>
    </div>
  );
};

export default SignIn;
