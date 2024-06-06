import { useEffect, useState } from "react";
import "./ViewProfiles.scss";
import ProfileList from "../../components/ProfileList/ProfileList";



const ViewProfiles = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);


  const getProfiles = async () => {
    const response = await fetch("http://localhost:8080/profiles");
    const profiledata = await response.json();
    setProfiles(profiledata);
  };

  useEffect(() => {
    getProfiles();
  },[]);

  return (
    <div>
      <ProfileList profiles={profiles} />
    </div>
  )
}

export default ViewProfiles
