import '../App.css';
import React from 'react';

const loginv = () => {
  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Your email address'
              required
            />
            <input 
            type='password' 
            name='password' 
            id='password'
            placeholder=' Password' 
            required/>
            <button type='submit'>Log In</button>
          </form>
        </div>
      </section>
    </>
  )
}


export default loginv;