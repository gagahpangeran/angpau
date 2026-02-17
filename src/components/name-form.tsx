import { useNavigate } from "react-router";

export default function NameForm() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const input = event.currentTarget.inputname as HTMLInputElement;
    const username = input.value;

    void navigate(`/?name=${username}`);
  };

  return (
    <form className="name-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        className="name-form__input"
        name="inputname"
      />
      <button type="submit" className="name-form__button">
        Get You Angpau
      </button>
    </form>
  );
}
