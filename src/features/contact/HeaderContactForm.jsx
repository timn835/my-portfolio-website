import { Link } from "react-router-dom";
import { useDarkMode } from "../../context/DarkModeContext";
import { useState } from "react";

function HeaderContactForm({ close }) {
  const { isDarkMode } = useDarkMode();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const darkModeInputClasses =
    "mb-3 w-full rounded-lg bg-sky-700 p-2 focus:outline-none";
  const lightModeInputClasses =
    "mb-3 w-full rounded-lg bg-zinc-300 p-2 focus:outline-none";
  const darkModeTextAreaClasses =
    "mb-3 rounded-lg bg-sky-700 p-2 focus:outline-none";
  const lightModeTextAreaClasses =
    "mb-3 rounded-lg bg-zinc-300 p-2 focus:outline-none";
  const darkModeButtonClasses =
    "mb-2 rounded-lg bg-sky-700 px-3 py-2 transition delay-150 ease-in-out hover:translate-y-1";
  const lightModeButtonClasses =
    "mb-2 rounded-lg bg-zinc-300 px-3 py-2 transition delay-150 ease-in-out hover:translate-y-1";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") return;
    console.log("submitted:\n", name, email, message);
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div>
      <Link to="contact">
        <h1 className="pb-1 text-2xl font-bold">Contact</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" aria-autocomplete="none">
          Your name
        </label>
        <input
          id="name"
          className={isDarkMode ? darkModeInputClasses : lightModeInputClasses}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id="email"
          className={isDarkMode ? darkModeInputClasses : lightModeInputClasses}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          className={
            isDarkMode ? darkModeTextAreaClasses : lightModeTextAreaClasses
          }
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className={
            isDarkMode ? darkModeButtonClasses : lightModeButtonClasses
          }
        >
          <div>Send</div>
        </button>
      </form>
    </div>
  );
}

export default HeaderContactForm;
