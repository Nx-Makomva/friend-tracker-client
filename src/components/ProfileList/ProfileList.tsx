import { useState } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./ProfileList.scss";

type ProfileListProps = {
  searchBoxFilter: Profile[];
};

const ProfileList = ({ searchBoxFilter }: ProfileListProps) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [birthdayStartDate, setBirthdayStartDate] = useState("");
  const [birthdayEndDate, setBirthdayEndDate] = useState("");
  const [lastSeenStartDate, setLastSeenStartDate] = useState("");
  const [lastSeenEndDate, setLastSeenEndDate] = useState("");

  return (
    <>
      <form>
        <input
          type="radio"
          id="birthday"
          name="dateOption"
          value="birthday"
          checked={selectedOption === "birthday"}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
        <label htmlFor="birthday">Birthday</label>

        <input
          type="radio"
          id="lastSeen"
          name="dateOption"
          value="lastSeen"
          checked={selectedOption === "lastSeen"}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
        <label htmlFor="lastSeen">Last Seen</label>

        {selectedOption === "birthday" && (
          <>
            <input
              type="date"
              id="birthdayDatePickerStart"
              name="birthdayDateStart"
            />
            <label htmlFor="birthdayDatePickerStart">Start Date</label>
            <input
              type="date"
              id="birthdayDatePickerEnd"
              name="birthdayDateEnd"
            />
            <label htmlFor="birthdayDatePickerEnd">End Date</label>
          </>
        )}

        {selectedOption === "lastSeen" && (
          <>
            <input
              type="date"
              id="lastSeenDatePickerStart"
              name="lastSeenDateStart"
            />
            <label htmlFor="lastSeenDatePickerStart">Start Date</label>
            <input
              type="date"
              id="lastSeenDatePickerEnd"
              name="lastSeenDateEnd"
            />
            <label htmlFor="lastSeenDatePickerEnd">End Date</label>
          </>
        )}
      </form>
      <div className="profiles">
        {searchBoxFilter.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </>
  );
};

export default ProfileList;
