import { useState } from "react"

function App() {
  const [colorType, setColorType] = useState("HEX")
  const [color, setColor] = useState('#246E03')

  
  const Color=["blue","red","green","black","pink","gold","yellow"]

  const getRand = (length) => {
     return  Math.floor(Math.random()*length)
  }

  const getrandColor=()=>{
     const str =  Color[getRand(Color.length)]  
      console.log(str) 
      setColor(str)
      setColorType("Color")   
  }

  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  const getRandcolorhex=()=>{
    let tr="#"
      for(let i=0;i<6;i++){
        tr += hex[getRand(hex.length)]
      }
      setColor(tr)
      setColorType("Hex")
  }

  const getRandcolorrgb=()=>{
    const r=getRand(256)
    const g=getRand(255)
    const b=getRand(255)
  console.log(r, g ,b)
    setColor(`rgb(${r},${g},${b})`)
    setColorType("Rgb")
  }


  return (
    <>
      <div style={{
        width: '98vw',
        height: '97vh',
        background: `${color}`,
        textAlign: 'center'
      }}>
        <button onClick={()=>getRandcolorhex()}>Randem Hex</button>
        <button onClick={()=>getRandcolorrgb()}>Randem Rgb</button>
        <button onClick={()=>getrandColor()}>Randem Color</button>
        {
          colorType==="Rgb"? 
          <div>
          <h1>{colorType}</h1>
          <h3>{color}</h3>
          </div>
           : 
           <div>       
        <h1>{colorType}</h1>
        <h3>{color}</h3>
          </div>
        }
      </div>
    </>
  )
}

export default App
