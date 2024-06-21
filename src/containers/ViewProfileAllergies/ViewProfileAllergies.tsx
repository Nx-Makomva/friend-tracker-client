import { useEffect, useState } from "react";
import "./ViewProfileAllergies.scss";
import { useParams } from "react-router-dom";


const ViewProfileAllergies = () => {
  const { id } = useParams();
  const [allergies, setallergies] = useState<string[]>([]);

  useEffect(() => {
  const handleShowAllergies = async () => {

    console.log("id is: ", id);
    
    try {
      const response = await fetch(`http://localhost:8080/profile/${id}/allergies`, {
        method: "GET",
        headers: {
          "Content-Type" : "application/json"
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch profile allergies. Status: ${response.status}`)
      }

      const result = await response.json();
      console.log("Success ", result);
      setallergies(result);

    } catch (error) {
      console.error("Error fetching profile allergies ", error)
    }
  };
  
    handleShowAllergies();
  }, [])

  return (
    <div>
      <h1>Allergies for Profile {id}</h1>
      <ul>
        {allergies.map((allergy, index) => (
          <li key={index}>{allergy}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewProfileAllergies
