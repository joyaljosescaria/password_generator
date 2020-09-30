import React , {useState} from "react";
import "./styles.css";

export default function App() {
  const [len , setLen] = useState(13)
  const [spcl , setSpcl] = useState(false)
  const [pass , setPass] = useState("")

  const getPassword = (e) =>{
      e.preventDefault()
      var pasw = ""
      for(var i=0 ; i< len ; i++)
      {
        var rand = randomInteger(1,4)
        if(spcl === true)
        {
          rand = randomInteger(1,5)
        }

        if(rand===1)
        {
          pasw = pasw + getRandomUpperCase()
        }
        else if(rand ===2)
        {
          pasw = pasw + getRandomLowerCase()
        }
        else if(rand ===3)
        {
          pasw = pasw + randomInteger(1,9) 
        }
        else
        {
          pasw = pasw + getRandomSymbol()
        }
      }
      setPass(pasw)
  }

  function copyText(e) {
    var text = e.target
    text.select()
    console.log(text)
    document.execCommand("copy");
}

  function randomInteger(max , min) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function getRandomSymbol(){
    var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
    return symbol[Math.floor(Math.random()*symbol.length)];
  }


  function getRandomLowerCase(){
   return String.fromCharCode(Math.floor(Math.random()*26)+97);
  }

  function getRandomUpperCase(){
       return String.fromCharCode(Math.floor(Math.random()*26)+65);
  }


  return (
    <div className="App">
      <h1>Random Password Generator</h1>
      <form>
        <input type="checkbox" id="periph1" name="peripherals" value="screen" onChange={ e => setSpcl(!spcl)} />
        <label htmlFor="special"> Use special Characters</label>
        <br/>
        <input type="text" onChange={e=>setLen(e.target.value)} value={len} />
        <br/>
        <button onClick={(e)=>getPassword(e)}>Get My Password</button>
        <br/>
        <input type="text"  value={pass} onFocus={(e) => copyText(e)}/>
      </form>
    </div>
  );
}
