import { useState } from 'react'
import './App.css'
import Header from './Componentes/Header'
import FormAddMoney from './Componentes/FormAddmoney'


function App() {
  const [count, setCount] = useState(0)

  return (
       <div className="App">
        <Header/>
        <FormAddMoney/>

       </div>
  )
}

export default App
