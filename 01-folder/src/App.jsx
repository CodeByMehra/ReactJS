import React from 'react'
import second from './components/card'
import Card from './components/card'

const app = () => {
  return (
    <div className="card">
      <h1>Mehra's Card</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, odio.</p>

      {Card()} 
      {/* USed {} to execute the card */}

      <Card/>
      {/* in this way the component will be automatically imported  */}
    </div>

    
  )
}

export default App 