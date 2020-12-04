import { graphql } from "gatsby"
import React, { useState } from "react"

const Tagslice = () => {
  const [items, setItems] = useState(["새", "하이", "똥", "후", "칸느"])
  const filterEvenResult = () => {
    setItems(items.filter(x => x.length > 1))
  }
  return (
    <div>
      {items.map(item => (
        <p key={item}>{item}</p>
      ))}

      <button onClick={filterEvenResult}>Filter</button>
    </div>
  )
}

export default Tagslice
