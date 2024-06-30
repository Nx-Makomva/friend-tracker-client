
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import ViewProfiles from './containers/ViewProfiles/ViewProfiles'
import ViewProfileAllergies from './containers/ViewProfileAllergies/ViewProfileAllergies'
import EditProfile from './containers/EditProfile/EditProfile'
import { useEffect, useState, FormEvent } from 'react'

function App() {

  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchBoxFilter, setSearchBoxFilter] = useState<Profile[]>([]);


  const getProfiles = async () => {
    const response = await fetch("http://localhost:8080/profiles");
    const profiledata = await response.json();
    setProfiles(profiledata);
  };

  useEffect(() => {
    getProfiles();
  },[]);


  const handleSearchInput = (event: FormEvent<HTMLInputElement>) => {
    const cleanedInput = event.currentTarget.value;
    const capitalisedInput = cleanedInput.charAt(0).toUpperCase() + cleanedInput.slice(1).toLowerCase()
    setSearchTerm(capitalisedInput)
  }

  useEffect(() => {
    const search = profiles.filter((profile) => {
      const searchByName = profile.name.includes(searchTerm);
      const searchByHeritage = profile.heritage.includes(searchTerm);
      const searchByProfession = profile.occupation.includes(searchTerm);

       return searchByName || searchByHeritage || searchByProfession;
    })

    setSearchBoxFilter(search)

  }, [searchTerm])



  

  return (
    <Router>
      <Nav 
        handleSearchInput={handleSearchInput}
        searchTerm={searchTerm}
      />
      <Routes>
        <Route path="/" element={<ViewProfiles searchBoxFilter={searchTerm ? searchBoxFilter : profiles} />} />
        <Route path="/profile/:id/allergies" element={<ViewProfileAllergies />} />
        <Route path="profile/:id" element={<EditProfile />} />
      </Routes>
      </Router>
  )
}

export default App
