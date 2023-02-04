import React from 'react'
import './Profiles.css'
import slika from '../images/slika.jpg'
function Profiles() {
  return (
<div>
<div className="container"> 

<div className="icons"> 
<img className = "profile" src={slika} alt="profile" />
<p className= 'name'>Hamo</p>
</div>

<div className="icons"> 
<img className = "profile" src={slika} alt="profile" />
<p className= 'name'>Pipa</p>
</div>

<div className="icons"> 
<img className = "profile" src={slika} alt="profile" />
<p className= 'name'>I</p>
</div>

<div className="icons"> 
<img className = "profile" src={slika} alt="profile" />
<p className= 'name'>Ostala</p>
</div>

<div className="icons"> 
<img className = "profile" src={slika} alt="profile" />
<p className= 'name'>Ekipa</p>
</div>

</div>
</div>
  )
}

export default Profiles
