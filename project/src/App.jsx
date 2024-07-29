import SoulTravel from './SoulTravel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer1 from './Footer'
import Form from './Form'
import Login from './Login'
import Layout from './Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Layout><SoulTravel /></Layout>} />
        <Route path="/form" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserDashboard/>}/>
        <Route path='/admin' element={<AdminDashboard/>}/>
    </Routes>
</Router>

  )
}

export default App
