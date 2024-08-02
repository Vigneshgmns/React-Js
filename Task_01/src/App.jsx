import { useState } from "react"

function App() {
  const [datas, setDatas] = useState(null)

  const handelData = (id) => {
    setDatas(id);
  };

  const data = [
    {
      id: 1,
      qusetion: "What is the best way to learn React.js?",
      answer: "React.js is a JavaScript library for building user interfaces"
    }, {
      id: 2,
      qusetion: "What is the best way to learn React.js?",
      answer: "React.js is a JavaScript library for building user interfaces"
    }, {
      id: 3,
      qusetion: "What is the best way to learn React.js?",
      answer: "React.js is a JavaScript library for building user interfaces"
    }, {
      id: 4,
      qusetion: "What is the best way to learn React.js?",
      answer: "React.js is a JavaScript library for building user interfaces"
    }]


  return (
    <>
      <div>
        {
          data && data.length > 0 ?
            <div>
              {
                data.map((item) => (
                  <div>
                    <div onClick={() => handelData(item.id)}>
                      <h3>{item.qusetion}</h3>
                      <span>+</span>
                    </div>
                    {
                      datas === item.id ? <div>{item.answer}</div> : <div></div>
                    }
                  </div>
                ))
              }
            </div>
            :
            <div>No data found</div>
        }
      </div>

    </>
  )
}

export default App
