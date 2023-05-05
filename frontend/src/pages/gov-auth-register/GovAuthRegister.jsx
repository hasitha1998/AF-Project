import { useState } from "react";
import GovAuthAPI from "../../contexts/api/GovAuthAPI";
import makeToast from "../../components/toast";
import { useMutation } from "@tanstack/react-query";

const GovAuthRegister = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassowrd] = useState("");

  const { mutate, isLoading } = useMutation(GovAuthAPI.register, {
    onSuccess: (data) => {
      makeToast({ type: "success", message: "Register Successful" });
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
    mutate({ name, description, email, password });
  };

  return (
    <div>
      <h1>Goverment Authority Register</h1>

      <form onSubmit={login}>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(event) => setConfirmPassowrd(event.target.value)}
          value={confirmPassword}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default GovAuthRegister;
