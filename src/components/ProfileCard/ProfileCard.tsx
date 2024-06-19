import "./ProfileCard.scss";

type ProfileCardProps = {
  name: string;
  birthday: string;
  numOfSiblings: string;
  occupation: string;
  heritage: string;
  lastSeen: string;
}

const ProfileCard = ({name, birthday, numOfSiblings, occupation, heritage, lastSeen}: ProfileCardProps) => {

  const birthdayDate = new Date(birthday);
  const lastSeenDate = new Date(lastSeen);

  return (
    <div>
      <h1>{name}</h1>
      <p>Birthday: {birthday}</p>
      <p>Siblings: {numOfSiblings}</p>
      <p>Profession: {occupation}</p>
      <p>Heritage: {heritage}</p>
      <p>Last Hangout: {lastSeen}</p>
      <button>Allergies</button> <button>Edit</button>
    </div>
  )
}

export default ProfileCard
