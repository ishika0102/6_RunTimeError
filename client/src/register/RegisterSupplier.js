import React from 'react';
import '../App.css';

const registers= () => {
  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control'>
          <input
              type='text'
              name='ownername'
              id='ownername'
              placeholder='Ownername'
              required
            />
            <input
              type='text'
              name='username'
              id='username'
              placeholder='Username'
              required
            />
            <input
              type='text'
              name='storename'
              id='storename'
              placeholder='Store Name'
              required
            />
            <input
              type='text'
              name='location'
              id='location'
              placeholder='Location'
              required
            />
            <input
              type='text'
              name='companyname'
              id='companyname'
              placeholder='Company Associated With'
              required
            />
            <input
              type='id'
              name='storeid'
              id='storeid'
              placeholder='Storeid'
              required
            />
            <input
              type='tel'
              name='phnno'
              id='phnno'
              placeholder='Your Phone Number'
              required
            />
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Choose your password'
              required
            />
            <input
              type='password'
              name='password2'
              id='password2'
              placeholder='Confirm your password'
              required
            />
            <button type='submit'>Create Your Account</button>
          </form>
        </div>
      </section>
    </>
  )
}
export default registers;
