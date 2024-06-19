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
            name={profile.name}
            birthday={profile.birthday}
            numOfSiblings={profile.numOfSiblings}
            occupation={profile.occupation}
            heritage={profile.heritage}
            lastSeen={profile.lastSeen}
          />
        ))}
      </div>
    </>
  );
};

export default ProfileList;