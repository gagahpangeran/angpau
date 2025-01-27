import { useNavigate } from "react-router";

export default function NameForm() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const input = event.currentTarget.angpauname as HTMLInputElement;
    const angpauName = input.value;

    void navigate(`/?name=${angpauName}`);
  };

  return (
    <form className="name-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        className="name-form__input"
        name="angpauname"
      />
      <button type="submit" className="name-form__button">
        Get You Angpau
      </button>
    </form>
  );
}
