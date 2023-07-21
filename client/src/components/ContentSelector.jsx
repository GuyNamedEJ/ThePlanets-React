import { useState } from "react"

function ContentSelector({planetName, handleClick}) {
  //const [active, setActive] = useState('overview');

  const styles = {
    border:{
      borderColor: `var(--color-${planetName})`
    }
  }

  const setActiveTab = (button) =>{

    let btns = document.querySelectorAll('.info-btn');
    
    btns.forEach(element => {
      element.classList.remove('active')
    });

    button.classList.add('active');
  }

  const onClick = (e) =>{
    let button = e.target  
    
    handleClick(button.getAttribute("data-value"))  
    
    setActiveTab(button)
  }

  return (
    <section className="btn-holder">
    <div style={styles.border} onClick={onClick} data-value={"overview"} id="m-overview" className="info-btn active">
      Overview
    </div>

    <div style={styles.border} onClick={onClick} data-value={"structure"} id="m-structure" className="info-btn">
      Structure
    </div>

    <div style={styles.border} onClick={onClick} data-value={"surface"} id="m-surface" className="info-btn">
      Surface
    </div>
  </section>
  )
}
export default ContentSelector