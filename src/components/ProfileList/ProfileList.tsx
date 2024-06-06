import "./ProfileList.scss";

type ProfileListProps = {
  profiles: Profile[];
};

const ProfileList = ({ profiles }: ProfileListProps) => {
  return (
    <>
      <div>
        {profiles.map((profile) => (
          <>
          <h2>{profile.name}</h2>
          <p>{profile.birthday}</p>
          <p>{profile.numOfSiblings}</p>
          <p>{profile.occupation}</p>
          <p>{profile.heritage}</p>
          <p>{profile.lastSeen}</p>
          </>
        ))}
      </div>
    </>
  );
};

export default ProfileList;
