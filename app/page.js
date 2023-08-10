'use client'

import {useState, useEffect} from 'react';

function Home(){

  const [pass, setPass] = useState('');
  const [length, setLength] = useState(0);
  const [prevLength, setPrevLength] = useState(0);

  useEffect(() => {
    if(length !== prevLength){
      let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      let paas = '';
      for(let i=0;i < length;i++){
        let has = Math.floor(Math.random() * 62);
        paas = `${paas}${string[has]}`;
      };

      setPass(paas);
      setPrevLength(length);
    };
  }, [pass, length, prevLength]);

  return (
    <div id='main'>
      <span className='logo'>PASS GEN</span>
      <input name='length' id='length' type='number' placeholder='Enter Length of password' min='3' max='30' onChange={(e) => {
      let f = parseInt(e.target.value.trim());
      if(f === 30 || f < 30 || f !== ""){
        setLength(parseInt(e.target.value.trim()))
      }else{
        e.target.value = 'Enter Length of password'
        alert('Password length must be less than or equal to 30');
      }
      }} />
      {pass && <div><p>Your Password</p><p>{pass}</p></div>}
    </div>
  );
};

export default Home;
