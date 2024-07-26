import { useState, useCallback, useEffect,useRef } from "react";

import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberall, setnumberall] = useState(false);
  const [charall, setcharall] = useState(false);
  const [password, setpassword] = useState("");

  
//ref hook use 
const passwordref = useRef(null);

  const copypassword = () => {
    if (passwordref.current) {
      passwordref.current.select();
      document.execCommand("copy");
      alert( "Password copied: " + passwordref.current.value);
    }
  };
  const passwordgen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (charall) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    if (numberall) str += "0123456789";

    for (let i = 0; i < length; i++) {
      const char = (Math.floor(Math.random() * str.length+1));
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, numberall, charall,setpassword]);

  useEffect(() => {
    passwordgen();
  }, [passwordgen, length, numberall, charall]);
  return (
    <>
      <h1 className=" text-3xl font-bold text-center mb-4 text-cyan-400">Password Generator</h1>
      <div className="w-auto mx-auto shadow-md rounded-2xl p-4 text-blue-500 bg-slate-700">
        <div className=" w-full flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full   py-2 px-3 bg-slate-950 text-white"
            placeholder="Generate Password"
            readOnly
            ref={passwordref}
          />
          <button onClick={copypassword} className="bg-blue-500 text-white hover:bg-blue-800 py-1 px-3">copy</button>
        </div>
        <div className="flex shadow rounded-lg overflow-hidden justify-between text-sm">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min="8"
              max="32"
              value={length}
              onChange={(e) => setlength(e.target.value)}
              className="w-full cursor-pointer"
              step="1"
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberall}
              onChange={() => setnumberall((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charall}
              onChange={() => setcharall((prev) => !prev)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
