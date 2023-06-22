import CustomNavbar from "./CustomNavbar";
import Corosel from "./Corosel";

const Base = ({ title = "Welcome to our website", children }) => {
  return (
    <div className="container-fluid p-0 m-0">
      <CustomNavbar />
      
      {children}
    </div>
  );
};

export default Base;
