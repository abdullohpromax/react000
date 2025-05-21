import { useState } from 'react'

import './App.css'
import Nav from './componet/Nav'
import Card from './componet/Card'
import Carta from './componet/carta'
import AppDesignCard from './componet/Xart'
import Cortt from './componet/Cort'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='big_main container'>
     <Nav/>
     <Card/>
     <div className='main_Cartlar'>
     <Carta
     img="trakt.svg"
     Text="EXPRESS"
     TExTt="A multi-carrier shipping website for ecommerce businesses"
     />
     <Carta
     img="tel.svg"
     Text="TRANSFER"
     TExTt="Site for low-cost money transfers and sending money within seconds"
     />

     <Carta
     img="kol.svg"
     Text="PHOTON"
     TExTt="A state-of-the-art music player with high-resolution audio and DSP effects  "
     />
     </div>
     <div className='left_carta'>
      <Carta
      img="room.svg"
     Text="BUILDER"
     TExTt="Connects users with local contractors based on their location "
      />
      <Carta
      img="tred.svg"
     Text="BLOGR"
     TExTt="Blogr is a platform for creating an online blog or publication "
      />
      <Carta
      img="nor.svg"
     Text="CAMP"
     TExTt="Get expert training in coding, data, design, and digital marketing "
      />
     </div>
     <div className='Xart_today'>
      <AppDesignCard
      Xart="Xart.svg"
      Xartp="APP DESIGN"
      Xartb="VIEW PROJECTS"
      />
      <AppDesignCard
      Xart="park.svg"
      Xartp="GRAPHIC DESIGN"
      Xartb="VIEW PROJECTS"
      />
     </div>
     <div>
      <Cortt/>
     
     </div>
      

    </div>
  )
}

export default App
