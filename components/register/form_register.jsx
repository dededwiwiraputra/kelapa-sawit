"use client";
import React, { useState } from 'react';
import Link from "next/link";

const Form_Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleregis = () => {
    // Handle login logic here
    console.log('Register in with:', email, password);
  };

  return (
    <div className="bg-tcp2 p-8 shadow-md w-96" 
    style={ 
      {height: '550px',
      width: '400px',
      paddingTop: '125px',
      borderRadius: '24px',}
      }>
      <h2 className="text-2xl font-bold mb-4 text-white text-center">Daftar</h2>
      <h2 className="text-1xl mb-4 text-white text-center">
        Silahkan Daftar Untuk Akses Akun Anda</h2>
      <form>
        <div className="mb-4 pb-2">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300"
            style={{borderRadius: '11px',}}
            placeholder='Username'
            required
          />
        </div>
        <div className="mb-4 pb-5">
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300"
            style={{borderRadius: '11px',}}
            placeholder='Password'
            required
          />
        <Link href="/">
          <p className='className="block pt-2 pl-2 text-white text-sm font-medium mb-2"'>Have an Account?</p>
        </Link>
        </div>
        <button
          type="button"
          onClick={handleregis}
          className="w-full active-button font-bold text-lg text-primary py-2 px-4 rounded-full"
        >
          Daftar
        </button>
      </form>
    </div>
  );
}

export default Form_Register;