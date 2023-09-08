import './App.css'
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'

function App() {
const greeting="bienvenidos"
  return (
    <>
      <Navbar />
      <div className="divGgreeting">
      <ItemListContainer greeting={greeting}/>    
      </div>
    </>
  )
}

export default App
