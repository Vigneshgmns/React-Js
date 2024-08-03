import { useState } from 'react'
import './App.css'
import { FaStar } from 'react-icons/fa'

function App() {


  return (
    <>
      <StarRating noOfStar={10} />

    </>
  )
}

export default App




export const StarRating = ({ noOfStar = 5 }) => {
  const [hover, setHover] = useState(0)
  const [rating, setRating] = useState(0)

  const handeling = (id) => {
    console.log(id)

  }


  return (
    <div>
      {
        [...Array(noOfStar)].map((_, index) => {
          index += 1
          return <FaStar
            size={40}
            key={index}
            onClick={() => handeling(index)}
            onMouseLeave={() => handeling(index)}
            onMouseMove={() => handeling(index)} />
        })
      }
    </div>
  )
}

