import { useEffect } from "react";
import { auth } from "../firebase";

const Index = () => {
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        console.log(user.providerData[0]);
      } else {
        console.log("user not found");
      }
    });
  }, []);
  return (
    <div>
      <h1>Index</h1>
    </div>
  );
};

export default Index;
