import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { TbRefresh } from "react-icons/tb";
import { MdOutlineArrowForward } from "react-icons/md";

const App = () => {
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [Symbols, setSymbols] = useState(false);
  const [passwordLength, setPasswordLength] = useState(6);

  const [generatedPassword, setGeneratedPassword] = useState("");

  function resetUppercase(event){
    setUppercase(!uppercase);
  }

  function resetLowercase(event){
    setLowercase(!lowercase);
  }

  function resetNumbers(event){
    setNumbers(!numbers);
  }

  function resetSymbols(event){
    setSymbols(!Symbols);
  }

  function changePasswordLength(event) {
    const length = event.target.value
    if(isNaN(length)){
      return alert("Password length invalid");
    }
    if(length.length > 2){
      return alert("Password length invalid");
    }
    setPasswordLength(length);
  
  }

  function copyFunction(){
    if(generatedPassword == ""){
      alert("Please generate a password before you copy");
    } else {
      navigator.clipboard.writeText(generatedPassword);
      alert("Password  copied to clipboard")
    }
  }
  

  function passwordGenerator(){

    // =========== CHECKING PASSWORD LENGTH ============== //
    if (isNaN(passwordLength) || passwordLength == "") {
      return alert("Input number length");
    }

    if(passwordLength < 6 || passwordLength > 16){
      return alert("Password length should be at least 6 and not more than 16");
    }

    // ============== MAKING SURE USER SELECT PASSWORD CHARACTERS ============== //
      let trueCount = 0;
      
      if (uppercase) trueCount++;
      if (lowercase) trueCount++;
      if (numbers) trueCount++;
      if (Symbols) trueCount++;
      
      if (trueCount < 2) {
        return alert("Please select at least two password character types");
      }
    
    let randomPassword = '';

    let uppercaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercaseAlphabets = "abcdefghijklmnopqrstuvwxyz";
    let numerics = "0123456789";
    let passwordSymbols = "!@#$%^&*()";

    let passCodes = "";
    if(uppercase){
      passCodes+=uppercaseAlphabets;
    }
    
    if(lowercase){
      passCodes+=lowercaseAlphabets;
    }
    
    if(numbers){
      passCodes+=numerics;
    }
    
    if(Symbols){
      passCodes+=passwordSymbols;
    }

    for(let i=0; i<passwordLength; i++){
      // console.log(passCodes[Math.floor(Math.random()*passCodes.length)])
      randomPassword += passCodes[Math.floor(Math.random()*passCodes.length)];
    }
    
    setGeneratedPassword(randomPassword);
  }

  return (
    <div className="h-screen bg-primaryBg flex flex-col justify-center items-center">
      <div>
        <p className="text-4xl text-primary uppercase font-semibold">Password Generator</p>
      </div>
      <div className="relative w-[350px] h-10">
        <input
          type="text"
          disabled
          className="border-2 border-secondary h-full bg-secondary px-3 text-secondary bg-opacity-20 w-full"
          value={generatedPassword}
        />
        <div className="flex absolute top-2 gap-2 right-3">
          <div onClick={()=>setGeneratedPassword("")} className="text-bars"><IoMenu size={20} /></div>
          <div onClick={passwordGenerator} className="text-secondary cursor-pointer"><TbRefresh size={20} /></div>
        </div>
        {/* <div>
          <button className="uppercase text-primaryBg bg-primary py-3 px-10 text-xs font-bold">copy Password</button>
        </div> */}
        <div onClick={copyFunction} className="btn mt-5 cursor-pointer justify-between relative flex overflow-hidden uppercase text-primaryBg bg-primary py-3 px-10 text-xs font-bold w-fit">
          <div className="slant"></div>
          <p>copy Password_</p>
          <div className="text-primaryBg "><MdOutlineArrowForward /></div>
          <div className="small"></div>
        </div>

        <div className="mt-5 flex gap-3 align-baseline">
          <input
            type="text"
            className="h-8 w-8 bg-secondary bg-opacity-20 border-2 text-secondary border-secondary outline-none text-center"
            value={passwordLength}
            onChange={changePasswordLength}
          />
          <p className="text-sm flex text-secondary">Password length</p>
        </div>

        <div className="flex flex-wrap gap-10">

          <div onClick={resetUppercase} className="flex cursor-pointer mt-5 gap-3">
            <div className={`w-4 h-4 border-2 border-primary ${uppercase ? "bg-primary" : "bg-transparent"}`}></div>
            <p className="text-white text-xs">Uppercase letter</p>
          </div>
          <div onClick={resetLowercase} className="flex cursor-pointer mt-5 gap-3">
            <div className={`w-4 h-4 border-2 border-primary ${lowercase ? "bg-primary" : "bg-transparent"}`}></div>
            <p className="text-white text-xs">lowercase letter</p>
          </div>
          <div onClick={resetNumbers} className="flex cursor-pointer mt-5 gap-3">
            <div className={`w-4 h-4 border-2 border-primary ${numbers ? "bg-primary" : "bg-transparent"}`}></div>
            <p className="text-white text-xs">Numbers</p>
          </div>
          <div onClick={resetSymbols} className="flex cursor-pointer mt-5 gap-3">
            <div className={`w-4 h-4 border-2 border-primary ${Symbols ? "bg-primary" : "bg-transparent"}`}></div>
            <p className="text-white text-xs">Symbols</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App;


