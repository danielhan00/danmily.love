import { useState } from "react";
import { motion } from "framer-motion";

const PasswordComponent = ({ correctPassword, onPasswordCorrect, router }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showButton, setShowButton] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === correctPassword) {
      onPasswordCorrect();
      setShowButton(true);
    } else {
      setError("Incorrect password. Please try again.");
    }

    setPassword("");
  };

  const handleButtonClick = () => {
    router.push("/welcome");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}

      {showButton && (
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleButtonClick}
        >
          Go to Welcome Page
        </motion.button>
      )}
    </div>
  );
};

export default PasswordComponent;
