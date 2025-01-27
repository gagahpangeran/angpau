export default function NameForm() {
  return (
    <form className="name-form">
      <input
        type="text"
        placeholder="Enter your name"
        className="name-form__input"
      />
      <button type="submit" className="name-form__button">
        Get You Angpau
      </button>
    </form>
  );
}
