import { useState } from "react"
import { db } from "./firebase"
import { addDoc, collection } from "firebase/firestore"

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const onSubmit= async(e)=>{
    e.preventDefault()
    const details={name,age:parseInt(age)}
    await addDoc(collection(db,'Details'),details)
    setAge('')
    setName('') 
  }

  return (
    <>
      <div className="app">
        <div className="container">
          <h1>CRUD Operation React</h1>
          <form onSubmit={ onSubmit }>
            <div className="from-cont">
              <label htmlFor="name">Name:</label>
              <input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="from-cont">
              <label htmlFor="name">Age:</label>
              <input type="text" placeholder="Age" required value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <button type="submit" className="btn">
              Add Deatils
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
