import { useCallback, useRef, useState } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./ProfileList.scss";

type ProfileListProps = {
  searchBoxFilter: Profile[];
};

const ProfileList = ({ searchBoxFilter }: ProfileListProps) => {
  const [selectedOption, setSelectedOption] = useState("");

  const sortedByBirthday = searchBoxFilter.slice().sort((a, b) => new Date(a.birthday).getTime() - new Date(b.birthday).getTime());
  const sortedByLastSeen = searchBoxFilter.slice().sort((a, b) => new Date(a.lastSeen).getTime() - new Date(b.lastSeen).getTime());
  const profilesToDisplay = selectedOption === 'lastSeen' ? sortedByLastSeen : selectedOption === 'birthday' ? sortedByBirthday : searchBoxFilter;
  const birthdayRadioRef = useRef<HTMLInputElement>(null);
  const lastSeenRadioRef = useRef<HTMLInputElement>(null);

  const reset = useCallback(() => {
    setSelectedOption("");
    if (birthdayRadioRef.current) {
      birthdayRadioRef.current.checked = false;
    }

    if (lastSeenRadioRef.current) {
      lastSeenRadioRef.current.checked = false;
    }
  }, []);



  return (
    <>
      <form>
        <input
          type="radio"
          id="birthday"
          name="dateOption"
          value="birthday"
          ref={birthdayRadioRef}
          checked={selectedOption === "birthday"}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
        <label htmlFor="birthday">Birthday</label>

        <input
          type="radio"
          id="lastSeen"
          name="dateOption"
          value="lastSeen"
          ref={lastSeenRadioRef}
          checked={selectedOption === "lastSeen"}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
        <label htmlFor="lastSeen">Last Seen</label>
      </form>
      <button onClick={reset}>Clear</button>
      <div className="profiles">
        { profilesToDisplay.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </>
  );
};

export default ProfileList;
