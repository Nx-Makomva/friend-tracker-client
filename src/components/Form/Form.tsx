import { useState } from "react";
import "./Form.scss";
import { FormEvent } from "react";

type FormProps = {
  defaultFormState: Profile;
  formTitle: string;
  handleSubmit: (profile: Profile) => void;
};

const Form = ({ defaultFormState, formTitle, handleSubmit }: FormProps) => {
  const [profile, setProfile] = useState<Profile>(defaultFormState);

  const handleValidation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Object.values(profile).some((value) => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }

    handleSubmit(profile)
  }

    const handleInput = (event: FormEvent<HTMLInputElement>, key: string) =>
      setProfile({ ...profile, [key]: event.currentTarget.value });

    return (
      <div className="form-container">
        <h2 className="form-container__title">{formTitle}</h2>
        <form className="form-container__form" onSubmit={handleValidation}>
          <input
            className="form-container__input"
            type="text"
            placeholder="name"
            value={profile.name}
            onInput={(event) => handleInput(event, "name")}
          />
          <input
            className="form-container__input"
            type="date"
            placeholder="birthday"
            value={profile.birthday}
            onInput={(event) => handleInput(event, "birthday")}
          />
          <input
            className="form-container__input"
            type="text"
            placeholder="number of siblings"
            value={profile.numOfSiblings}
            onInput={(event) => handleInput(event, "numOfSiblings")}
          />
          <input
            className="form-container__input"
            type="text"
            placeholder="occupation"
            value={profile.occupation}
            onInput={(event) => handleInput(event, "occupation")}
          />
          <input
            className="form-container__input"
            type="text"
            placeholder="heritage"
            value={profile.heritage}
            onInput={(event) => handleInput(event, "heritage")}
          />
          <input
            className="form-container__input"
            type="date"
            placeholder="when you last saw them"
            value={profile.lastSeen}
            onInput={(event) => handleInput(event, "lastSeen")}
          />
          <button type="submit" className="form-container__button">
            Submit
          </button>
        </form>
      </div>
    );
  };

export default Form;
