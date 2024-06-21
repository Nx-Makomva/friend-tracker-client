import ProfileCard from "../ProfileCard/ProfileCard";
import "./ProfileList.scss";

type ProfileListProps = {
  profiles: Profile[];
};

const ProfileList = ({ profiles }: ProfileListProps) => {

  return (
    <>
      <div className="profiles">
        {profiles.map((profile) => (
          <ProfileCard 
            key={profile.id} 
            profile={profile}
          />
        ))}
      </div>
    </>
  );
};

export default ProfileList;