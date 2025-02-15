import './App.css'
import Hero from './components/hero'
import Jobs from './pages/Jobs'
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <Routes>
      <Route path='/'element={<Hero/>}/>
      <Route path='/Jobs'element={<Jobs/>}/>
      </Routes>
  )
}

export default App