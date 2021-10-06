import { useState } from "react";
import { auth } from "../firebase";

const Reg = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("Ok");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="name"
          placeholder="example name"
          required
          name="name"
          value={name}
          onChange={(e) => onChange(e)}
        />
        <input
          type="email"
          placeholder="name@example.com"
          required
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
        />
        <input
          type="password"
          id="exampleFormControlInput1"
          placeholder="password"
          name="password"
          required
          value={password}
          onChange={(e) => onChange(e)}
        />
        <input type="submit" value="Reg" />
      </form>
    </div>
  );
};

export default Reg;
