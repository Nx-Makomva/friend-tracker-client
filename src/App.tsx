
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import ViewProfiles from './containers/ViewProfiles/ViewProfiles'
import ViewProfileAllergies from './containers/ViewProfileAllergies/ViewProfileAllergies'
import EditProfile from './containers/EditProfile/EditProfile'

function App() {

  // nav bar to render at the top 

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<ViewProfiles />} />
        <Route path="/profile/:id/allergies" element={<ViewProfileAllergies />} />
        <Route path="profile/:id" element={<EditProfile />} />
      </Routes>
      </Router>
  )
}

export default App
