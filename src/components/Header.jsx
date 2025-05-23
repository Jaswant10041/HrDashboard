import { Link } from "react-router-dom";
import { logoUrl } from "../utils/common";
const Header = () => {

  return (
    <div className="flex justify-between border border-black m-1">
      <div className="logo-container mb-1">
        <Link to={'/'}><img
          src={logoUrl}
          alt="logo"
          className="w-20 h-20"
        /></Link>
      </div>
      <ul className="flex list-none items-center mb-1">
        <Link to={'/'}><li className="px-5 font-medium text-2xl">Home</li></Link>
        <Link><li className="px-5 font-medium text-2xl">AboutUs</li></Link>
        <Link><li className="px-5 font-medium text-2xl">Contacts</li></Link>
        <Link><li className="px-5 font-medium text-2xl">Cart</li></Link>
        
      </ul>
    </div>
  );
};
export default Header;