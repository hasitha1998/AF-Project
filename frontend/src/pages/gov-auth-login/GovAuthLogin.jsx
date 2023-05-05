import { useState } from "react";
import GovAuthAPI from "../../contexts/api/GovAuthAPI";
import makeToast from "../../components/toast";
import { useMutation } from "@tanstack/react-query";

const GovAuthLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isLoading } = useMutation(GovAuthAPI.login, {
    onSuccess: (data) => {
      makeToast({ type: "success", message: "Login Successful" });
    },
    onError: (error) => {
      makeToast({
        type: "error",
        message: error.response.data.details.message,
      });
    },
  });

  const login = (event) => {
    event.preventDefault();
    mutate({ email, password });
  };

  return (
    <div>
      <h1>Goverment Authority Login</h1>

      <form onSubmit={login}>
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default GovAuthLogin;
