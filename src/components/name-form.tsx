import { useNavigate } from "react-router";

export default function NameForm() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const input = event.currentTarget.thrname as HTMLInputElement;
    const thrname = input.value;

    void navigate(`/?name=${thrname}`);
  };

  return (
    <form className="name-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        className="name-form__input"
        name="thrname"
      />
      <button type="submit" className="name-form__button">
        Get You THR
      </button>
    </form>
  );
}
