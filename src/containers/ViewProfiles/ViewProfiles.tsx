import "./ViewProfiles.scss";
import ProfileList from "../../components/ProfileList/ProfileList";

type ViewProfilesProps = {
  searchBoxFilter: Profile [];
}

const ViewProfiles = ({ searchBoxFilter }: ViewProfilesProps) => {

  return (
    <div className="profile-list">
      <h1></h1>
      <ProfileList 
      searchBoxFilter={searchBoxFilter}
      />
    </div>
  )
}

export default ViewProfiles
