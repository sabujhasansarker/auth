import { useState } from "react";
import { auth } from "../firebase";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log("ok");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="email"
          placeholder="name@example.com"
          value={email}
          name="email"
          onChange={(e) => onChange(e)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          name="password"
          onChange={(e) => onChange(e)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
