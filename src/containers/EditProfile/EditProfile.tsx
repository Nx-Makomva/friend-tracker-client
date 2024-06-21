import { useNavigate, useParams } from "react-router-dom";
import "./EditProfile.scss";
import { useEffect, useState } from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Form from "../../components/Form/Form";


const EditProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);

const getProfileById = async (id: string) => {
  
  try {
    const response = await fetch(`http://localhost:8080/profile/${id}`, {
      method: "GET",
      headers: {
        "Content-Type" : "application/json"
      },
    })

    if(!response.ok) {
      throw new Error(`Failed to fetch profile. Status: ${response.status}`)
    }

    const result = await response.json();
    console.log("Success ", result);
    setProfile(result);
    

  } catch (error) {
    throw new Error(`Error fetching profile: ${id}`);
  }
};

useEffect(() => {
  if (id) {
   getProfileById(id);
  }
  
}, [id])


const handleUpdateProfile = async (updatedProfile: Profile) => {

  try {
    const response = await fetch(`http://localhost:8080/profile/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(updatedProfile)
    })

    setProfile(updatedProfile)
    if(!response.ok) {
      throw new Error(`Failed to update profile. Status: ${response.status}`);
    }

  } catch (error) {
    console.error("Error updating profile: ", error)
  }
}


const handleDeleteProfile = async () => {

  try {
    const response = await fetch(`http://localhost:8080/profile/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json"
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to delete profile. Status: ${response.status}`);
    }

    console.log("Profile successfully deleted");

  } catch (error) {
    console.error("Error deleting profile: ", error)
  }

  navigate("/")
}

const handleShowForm = () => setShowForm(!showForm);

// if (!greeting) return <Spinner />;

  return (
    <section className="edit-profile">
    <h2 className="edit-profile__title">Edit Profile</h2>
    <div className="edit-profile__content">
     {profile && <ProfileCard profile={profile} />}
      <div className="edit-profile__buttons">
        <button
          className={showForm ? "edit-profile__button" : "edit-profile__button edit-profile__button--secondary"}
          onClick={handleShowForm}
        >
          Update
        </button>
        <button className="edit-profile__button edit-profile__button--secondary" onClick={handleDeleteProfile}>
          Delete
        </button>
      </div>
    </div>
    {showForm && profile && <Form defaultFormState={profile} formTitle="Update greeting" handleSubmit={handleUpdateProfile} />}
  </section>
  )
}

export default EditProfile
