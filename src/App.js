import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Profile from "./Profile"
import Header from './Header'

function App() {
  return (
    <div className="App">
        <Header />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="profile" element={ <Profile/> } />
      </Routes>
    </div>
  )
}

export default App
