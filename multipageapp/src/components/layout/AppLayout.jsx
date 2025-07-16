import { Outlet, Link } from "react-router-dom";
//import { Footers} from "./UI/Footers";
//import { Headers} from "./UI/Headers";

export const AppLayout = () => {
  return (
    <>
      <nav style={{ padding: "10px", background: "#f0f0f0" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/country">Country</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <hr />
      <Outlet /> {/* Child pages will render here */}
    </>
  );
};
