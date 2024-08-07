import { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [user ,setUser]=useState([])
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((respone)=>respone.json())
      .then((data)=>setUser(data))
    },[])

    const filute=()=>{
     const arra= user.filter((resn)=>(resn.id >=5))
     setUser(arra)
      console.log(arra)
    }

  return (
    <>
     <div className='box-tak'>
       {user.map((users,id)=>(
         users.id >=6 ? <div className='box'>
          <p key={id}>{users.email}</p>
          <p key={id}>{users.username}</p>
         </div> : <div className='box'>
          <p>{users.username}</p>
          <p>{users.name}</p>
         </div>
       ))

       }
      <button onClick={filute}>Show your addrees</button>
     </div>
    </>
  )
}

export default App
