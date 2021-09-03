import React, { useEffect, useContext } from "react";
import AppContext from "context";

const Home: React.FC = () => {
  console.log("HOME");
  const c = useContext(AppContext);
  useEffect(() => {
    console.log(c, "home");
  }, []);
  return <div>Home</div>;
};
export default Home;
