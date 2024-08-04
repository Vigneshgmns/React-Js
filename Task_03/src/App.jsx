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
    setRating(id)
    console.log(id)
  }
  const handelingLave = (id) => {
    setHover(rating)
    console.log(id)
  }
  const handelingMove = (id) => {
    setHover(id)
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
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            onClick={() => handeling(index)}
            onMouseLeave={() => handelingLave()}
            onMouseMove={() => handelingMove(index)} />
        })
      }
    </div>
  )
}

