// import { useState } from 'react'

// const App = () => {
//   const [first, setfirst] = useState(0)
//   return (
//     <div>
//       <h1>{first}</h1>
//       <button onClick={()=>setfirst(first+1)}>increase</button>
//       <button onClick={()=>setfirst(first-1)}>decrease</button>
//     </div>
//   )
// }

// export default App
 

import { useState } from "react"


const App = () => {
  const [first, setfirst] = useState(false)
  const x=0
  return (
    <div>
      {(x)?`value is ${x}`:"not found"}
      {first && <div>here is the content </div>}
      <button onClick={()=>setfirst(!first)}>click to display</button>
    </div>
  )
}

export default App
