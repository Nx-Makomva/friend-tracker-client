import "./ProfileCard.scss";
import { useNavigate } from "react-router-dom";

// type ProfileCardProps = {
//   id: string;
//   name: string;
//   birthday: string;
//   numOfSiblings: string;
//   occupation: string;
//   heritage: string;
//   lastSeen: string;
// }

type ProfileCardProps = {
  profile: Profile
}

const ProfileCard = ({profile: profileObject}: ProfileCardProps) => {
  const { id, name, birthday, numOfSiblings, occupation, heritage, lastSeen } = profileObject;
  const navigate = useNavigate();

  // const birthdayDate = new Date(birthday);
  // const lastSeenDate = new Date(lastSeen);

  const handleAllergyClick = () => {
    navigate(`/profile/${id}/allergies`)
  }

  const handleEditClick = () => {
    navigate(`/profile/${id}`)
  }

  return (
    <div>
      <h1>{name}</h1>
      <p>Birthday: {birthday}</p>
      <p>Siblings: {numOfSiblings}</p>
      <p>Profession: {occupation}</p>
      <p>Heritage: {heritage}</p>
      <p>Last Hangout: {lastSeen}</p>
      <button onClick={handleAllergyClick}>Allergies</button> <button onClick={handleEditClick}>Edit</button>

    </div>
  )
}

export default ProfileCard
