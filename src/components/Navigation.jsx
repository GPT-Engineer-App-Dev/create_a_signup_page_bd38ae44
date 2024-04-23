import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/signup">Sign up</Link>
    </nav>
  );
};

export default Navigation;
