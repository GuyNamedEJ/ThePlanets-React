import { useState } from "react"

function ContentSelector() {
  const [content, setContent] = useState('')
  
  const handleClick = (e) =>{
      console.log(e.target.value)  
  }
  return (
    <section className="btn-holder">
    <div onClick={handleClick} value={"overview"} id="m-overview" className="info-btn active">
      <h3>Overview</h3>
    </div>

    <div id="m-structure" className="info-btn">
      <h3>Structure</h3>
    </div>

    <div id="m-surface" className="info-btn">
      <h3>Surface</h3>
    </div>
  </section>
  )
}
export default ContentSelector