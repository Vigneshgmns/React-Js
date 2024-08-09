import { useState } from "react"

function App() {
  const [img, setImg] = useState("")
  const [load, setLoad] = useState( false )
  const [qrcode,setQrcode]=useState("")
  const [size,setSize]=useState()
  async function getQr() {
    setLoad(true)
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrcode)} && size=${size}x${size} `
      setImg(url)

    } catch (error) {
      console.error("error of the img ");

    } finally {
      setLoad(false)
    }

  }

  const dowQr=()=>{
    fetch(img).then((response)=>response.blob())
    .then((blob)=>{
      const link=document.createElement('a')
      link.href=URL.createObjectURL(blob)
      link.download="Qr Code.png"
      document.body.appendChild(link)
      link.click()
      document.removeChild(link)

    })

  }


  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[18px] font-semibold m-4">QR Code</h2>

        {load && <p className="font-normal text-[18px]" >Plase Waiting....</p>}

        {img && <img src={img} />}

        <div>
          <label htmlFor="url" className="font-medium text-[16px]">Enter the URL</label>

          <input type="text" id="url" placeholder="Enter URL...."  onChange={(e)=>setQrcode(e.target.value)} className="w-[100%] border rounded-md p-2 border-gray-600 " />

          <label htmlFor="size" className="font-medium text-[16px]">Image Size (eg.150)</label>

          <input type="text" id="size" placeholder="Enter image size..." onChange={(e)=>setSize(e.target.value)} className="w-[100%] border rounded-md p-2 border-gray-600" />
        </div>
        <div className="flex gap-4 mt-4">

          <button onClick={() => getQr()} className="bg-green-500 p-3 rounded-xl text-white cursor-pointer hover:bg-green-400">Generate QR Code</button>

          <button onClick={()=> dowQr()} className="bg-blue-800 p-3 rounded-xl text-white hover:bg-slate-500 cursor-pointer">Download QR Code</button>
        </div>
      </div>
    </>
  )
}

export default App
