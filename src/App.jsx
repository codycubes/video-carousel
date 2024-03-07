
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home'
import { Contact } from './Pages/Contact/Contact'

// Main function component for the entire application
function App() {

  return (
    // Router component to enable routing in the application
    <Router>
     
      <Navbar />
      {/* Routes component to define various routes in the application */}
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />

        {/* Route for the contact page */}
        <Route path="/Contact" element={<Contact />} />

      </Routes>
    </Router>
  )
}


export default App
